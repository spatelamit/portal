<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\Auth;

use App\Models\rcstemplate;

class rcstemplate extends Model
{
    use HasFactory;

    public function rcs_template($request)
    {
    	rcstemplate::insert([
	        "user_id" => Auth::id(),
	        "mediatype" => $request->mediatype,
	        "template_name" => $request->template_name,
	        "card_type" => $request->card_type,
	        "content" => $request->content,
	    ]); 

        return response()->json([
            'message' => 'Rcs Template saved',
            'status' => 202,
        ], 200);
    }
}
