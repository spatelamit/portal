<?php


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\Admin;
use Session;

class Administrator extends Controller
{

    public function __construct() {
        $this->middleware('admin:web', ['except' => ['login','loginaction']]);
    }

    public function login(){
         $data['heading'] = "Login";
         return view('admin/login', $data);
    }

    public function loginaction(Request $req){

            $result  =  Admin::where('admin_username', $req->username)
                        ->where('admin_password', $req->password)
                        ->first();

                    if ($result) {
                        Session::put('AdminData', $result);
                        Session::put('IsLoggedIn', true);
                        Session::put('Username', $result->admin_username);
                        Session::put('AdminId', $result->admin_id);
                        return redirect('/admin/dashboard');
                    }
                    else{
                        return response()->json(['status'=>'Failed','message'=>'Admin Not Found']);
                    }

         // return $data['heading'] = "Login";
    }
    
    public function dashboard(){
         $data['heading'] = "Dashboard";
         return view('admin/dashboard', $data);
    }
    
}
