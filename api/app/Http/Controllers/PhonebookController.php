<?php

namespace App\Http\Controllers;
ini_set('max_execution_time', '3600');
ini_set('memory_limit', '107374182400');


use Validator; 
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\RequestHelper;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\Encryption\DecryptException;
use Spatie\QueryBuilder\QueryBuilder;


use App\Models\phonebook_contact_value;
use App\Models\phonebook_column;
use App\Models\phonebook;


class PhonebookController extends Controller
{
    //--------------------------PhoneBook-----------------------------//

    public function phonebookSave(Request $request)
    {
        $validated = Validator::make($request->all(), [ 
            'phonebook_name' => 'required|min:3',
        ]);
        

        if(!$validated->fails())
        {
            $dt = Carbon::now()->toDateTimeString();

            phonebook::insert(["user_id" => Auth::id(),"phonebook_name" => $request->phonebook_name,"created_at" => $dt,]);
            // DB::table('phonebooks')->
            phonebook_column::insertOrIgnore([
                ['user_id' => Auth::id(), 'column_name' => 'Name',"column_type" => "Text","created_at" => $dt],
                ['user_id' => Auth::id(), 'column_name' => 'Email',"column_type" => "Email","created_at" => $dt],
                ['user_id' => Auth::id(), 'column_name' => 'Number',"column_type" => "Number","created_at" => $dt]
            ]);

            // DB::table('phonebook_columns')->
            return response()->json([
                'Phonebook Name' => $request->phonebook_name,
                'Message' => 'Phonebook created Successfully',
                'Status' => 'Success',
            ], 201); 

        }

        return response()->json([
            'Message' => $validated->errors(),
            'Status' => 'Failed',
        ], 403); 

    }

    public function phonebookName($phonebook_id)
    {
        $name = phonebook::where('phonebook_id', $phonebook_id)->where('user_id', Auth::id())->get('phonebook_name');
        $result=phonebook_contact_value::where('phonebook_id', $phonebook_id)->count();
        // $sql="CALL getPhoneBookData('".Auth::id()."', '".$phonebook_id."')";
        // $result=DB::select($sql);
        // $result= count($result);
        return response()->json([[
            'phonebook_name' => $name[0]->phonebook_name,
            'count' => $result
        ]]); 

    }
    public function phonebookDel($phonebook_id)
    {
        phonebook::where('phonebook_id', $phonebook_id)->delete();
        phonebook_contact_value::where('phonebook_id', $phonebook_id)->delete();

        DB::statement('ALTER TABLE phonebooks AUTO_INCREMENT = 1');
        DB::statement('ALTER TABLE phonebook_contact_values AUTO_INCREMENT = 1');

          return response()->json([
            'message' => 'Phonebook and its Contacts deleted Successfully.',
            'status' => '200'
        ], 200); 
    }

    public function phonebookColumn(Request $request)
    {   
        
        $validated = Validator::make($request->all(), [ 
            'column_name' => 'required',
            'column_type' => 'required',
        ]);
        

        if(!$validated->fails())
        {
            $col = $request->column_name;
            // foreach($col as $val)
            // {
                $dt = Carbon::now()->toDateTimeString();
                DB::table('phonebook_columns')->insert([
                    "user_id" => Auth::id(),
                    "column_name" => $col,
                    "column_type" => $request->column_type,
                    "created_at" => $dt,
                ]); 
            // }
            
            return response()->json([
                'Message' => 'Column created Successfully',
                'Status' => 'Success',
            ], 201); 
        }
        return response()->json([
            'Message' => $validated->errors(),
            'Status' => 'Failed',
        ], 403);   
    }

    public function getColumn()
    {   
        // DB::enableQueryLog();
        $data=DB::table('phonebook_columns')->select('column_name','column_id', 'column_type')->where('user_id', Auth::id())->orderBy('column_id', 'ASC')->get();
        // return DB::getQueryLog();
        return response()->json([
            'message' => 'Column details',
            'status' => '200',
            'data' => $data,
        ], 200); 
    }

    public function phonebookColumnDel($column_id)
    {

        phonebook_contact_value::where('column_id', $column_id)->delete();
        phonebook_column::where('column_id', '=', $column_id)
                            ->Where([['column_name', '!=', 'Name'],
                                     ['column_name', '!=', 'Email'],
                                     ['column_name', '!=', 'Number']])
                            ->delete();


        DB::statement('ALTER TABLE phonebook_columns AUTO_INCREMENT = 1');
        DB::statement('ALTER TABLE phonebook_contact_values AUTO_INCREMENT = 1');
        return response()->json([
            'message' => 'Success but you can not delete default columns',
            'status' => '200'
        ], 200); 
          
    }
 
    public function phonebookColumnEdit(Request $request)
    {

        $dt = Carbon::now()->toDateTimeString();

        phonebook_column::where('column_id', $request->column_id)
            ->update(array('column_name' => $request->column_name, 'column_type' => $request->column_type));
        // DB::table('phonebook_columns')
        //     ->where('column_id', $request->column_id)
        //     ->update(array('column_name' => $request->column_name, 'column_type' => $request->column_type, 'updated_at' => $dt));
        
        return response()->json([
             'message' => 'Success',
            'status' => '200'
        ], 200); 
          
    }


  
    public function phonebookValue(Request $request)
    {   
        $user_id = Auth::id();
        $phonebook_id = $request->phonebook_id;

        $validated = Validator::make($request->all(), [ 
            'phonebook_id' => 'required'
        ]);
        
        
        if(!$validated->fails())
        {
            $dt = Carbon::now()->toDateTimeString();
            $col = $request->column_val;


            DB::table('phonebook_contacts')->insert(["contact_id"=>null]);
            $lastId = DB::getPdo()->lastInsertId();
        
            foreach($col as $x => $val) {
                // if ($val == "") {
                //     return response()->json([
                //         'message' => 'All field is required',
                //         'status' => '403',
                //     ], 403);   
                // }else{
                    DB::table('phonebook_contact_values')->insert(["column_id" => $x,"phonebook_id" => $phonebook_id, "value" => $val,"created_at" => $dt,"contact_id" =>  $lastId]);
                // }
                
            }

            return response()->json([
                'Message' => 'Value Inserted',
                'Status' => 'Success',
            ], 201); 
        }
        return response()->json([
            'Message' => $validated->errors(),
            'Status' => 'Failed',
        ], 403);   
    }

    public function contactList($phonebook_id=null)
    {
        $sql="CALL getPhoneBookData('".Auth::id()."', '".$phonebook_id."')";
        $result=DB::select($sql);
        if(!empty($result)){
            return $result;

        }
        else{
            return response()->json([
                'message' => 'Not having any valid data',
                'status' => 'Failed',
            ], 403); 
        }
        
    }
    public function phonebookimport(Request $request)
    {
        $phonebook_id = $request[0]['phonebook_id'];
        $structure = $request[2];
        $array = $request[1];

        
        foreach ($array as $arr)
        {
            DB::table('phonebook_contacts')->insert(["contact_id"=>null]);
            $lastId = DB::getPdo()->lastInsertId();

            foreach ($structure as $key => $val)
            {
                if(isset($arr[$key]) )
                {
                    DB::table('phonebook_contact_values')->insert(["column_id" => $val,"phonebook_id" => $phonebook_id, "value" => $arr[$key],"contact_id" =>  $lastId]);  

                }
            }
        }
        return response()->json([
            'message' => 'Phonebook Imported',
            'status' => 'success',
        ], 200);
    }
    public function contactDel($contact_id)
    {
        phonebook_contact_value::where('contact_id',$contact_id)->delete();
        DB::statement('ALTER TABLE phonebook_contact_values AUTO_INCREMENT = 1');
    }
    public function contactEdit(Request $request)
    {
        // return $request->contact_id;
        $contact_id = $request[0]['contact_id'];
        $edit = $request[0]['edit'];
        foreach ($edit as $key => $value) {
            DB::table('phonebook_contact_values')->where('column_id', $key)->where('contact_id', $contact_id)->update(array('value' => $value));
            // phonebook_contact_value::where('column_id', $key)->where('contact_id', $contact_id)->update(['value', $value]);
        }
         return response()->json([
                'message' => 'contact edit',
                'status' => 'success',
            ], 200); 

      

        
    }

      public function contactEditDetail($contact_id)
    {
        $sql = "SELECT 
                    c.column_id,
                    v.contact_id,
                    c.column_name,
                    v.value
                FROM phonebook_contact_values v

                LEFT JOIN phonebook_columns c ON
                v.column_id =  c.column_id WHERE 
                    v.contact_id= ".$contact_id;
          $result=DB::select($sql);
        return $result;

    }


    
    public function contactEditDetail1($contact_id){

        $z = array();
        $column_name_array = array();

        
        $detail=phonebook_contact_value::where('contact_id',$contact_id)->get(['value_id','value', 'column_id']);

        
        foreach ($detail as $value) {
            $column_name_array[] = phonebook_column::where('column_id',$value['column_id'])->get('column_name');    
        }

        foreach ($column_name_array as $value) {
            $z[] = $value[0]['column_name'];
        }
        
        for ($i=0; $i < sizeof($detail); $i++) { 
            $data[] = array(
                    'value_id' =>$detail[$i]['value_id'],
                    'value' => $detail[$i]['value'],
                    'column_id' =>$detail[$i]['column_id'],
                    'column_name' => $z[$i]
                );
        }
        return $data;    
    }
}