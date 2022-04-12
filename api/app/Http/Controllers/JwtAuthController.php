<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;
use App\Models\Whitelabel;



class JwtAuthController extends Controller
{

    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register','refresh']]);
        
    }

    /**
     * Get a JWT via given credentials.
    */
    public function login(Request $request){
        
    	$req = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:5',
        ]);

        if ($req->fails()) {
            return response()->json($req->errors(), 422);
        }

        if (! $token = auth()->attempt($req->validated())) {
            return response()->json(['error' => 'Email or password is not exist'], 401);
        }
       
 
        return $this->generateToken($token);
    }

    /**
     * Sign up.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        // $origin = request()->headers->get('origin');
        // return $origin;
        
        // $domain = 'sak.com';

        // elseif(!empty($data)){
        //     return "yes";
        // }
        $req = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'username' => 'required|between:5,15|string|unique:users',
            'email' => 'required|string|email|max:100|unique:users',
            'contact_number' => 'required|unique:users',
            'password' => 'required|string|confirmed|min:6',
            'country_name' => 'required',   
        ]);
        
        if($req->fails()){
            return response()->json($req->errors() , 400);
        }


        $parent_id = 0;
        $domain = $request->domain;
        $data= Whitelabel::where('domain', $domain)->get('user_id');

        if (sizeof($data)==0) {
            return response()->json([
                'message' => 'Invalid Route',
                'status' => 401,
            ], 401);
        }else{
            if(Auth::id()){
                $parent_id =  Auth::id();
            }elseif ($domain) {
                $parent_id = $data[0]->user_id;
            }
            $data = array(
                    "parent_id" => $parent_id,
                    "name" => $request->name,
                    "username" => $request->username,
                    "email" => $request->email,
                    "auth_key" => md5(uniqid()),
                    "contact_number" => $request->contact_number,
                    "password" => bcrypt($request->password),
                    "country_code" => $request->country_name,
                );
            $user = User::insert($data);
            return response()->json(['message' => 'Account Created Successfully.'], 200);
        }

        
    }

    public function signout() {
        auth()->logout();
        return response()->json(['message' => 'Account logged out.']);
    }

    /**
     * Token refresh
    */
    public function refresh() {
        return $this->generateToken(auth()->refresh());
    }

    /**
     * User
    */
    public function users() {
        return response()->json(auth()->user());
    }
    

    /**
     * Generate token
    */
    protected function generateToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
    
}