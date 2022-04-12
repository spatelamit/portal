<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;


class rcssetting extends Model
{
    use HasFactory;

    public function rcs_setting($request)
    {

    	$logo_file_name = uniqid().$request->file('logo')->getClientOriginalName();
        $logo_file_path = $request->file('logo')->storeAs('uploads/rcs_logo', $logo_file_name, 'public');

        $keypath_name = $request->file('keypath')->getClientOriginalName();
        $keypath = $request->file('keypath')->storeAs('uploads/rcs_keypath', $keypath_name, 'public');

 		rcssetting::insert([
	        "user_id" => Auth::id(),
	        "agentname" => $request->agentname,
	        "keypath" => $keypath_name,
	        "logo" => $logo_file_path,
	        "description" => $request->description,
	    ]); 

        return response()->json([
            'message' => 'Rcs setting saved',
            'status' => 202,
        ], 200);
    }




}
