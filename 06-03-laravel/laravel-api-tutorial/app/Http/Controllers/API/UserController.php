<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    // function to create user
    public function createUser(Request $request)
    {
        // validators

        $validator = Validator::make($request->all(), [
            'name' => "required|string",
            'email' => "required|string|unique:users",
            'email' => "required|numeric",
            'phone' => "required|min:6",
        ]);

        if ($validator->fails()) {
            $result = array('status' => false, 'message' => "validation error occured", 'error_message' => $validator->error());

            return response()->json($result, 400);
        }


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => bcrypt($request->password),
        ]);

        if ($user->id) {
            $result = array('status' => true, 'message' => "user created", "data" => $user);

            $responseCode = 200;
        } else {
            $result = array('status' => false, 'message' => "something went wrong");

            $responseCode = 400;
        }
        return response()->json($result, $responseCode);
    }

    // functions to get users 
    public function getUsers()
    {

        $users = User::all();

        $result = array('status' => true, 'message' => count($users), "data" => $users);
        $responseCode = 200;

        return response()->json($result, $responseCode);
    }

    public function getUserDetail($id)
    {

        $users = User::find($id);
        $result = array('status' => true, 'message' => "user found ", "data" => $users);
        $responseCode = 200;

        return response()->json($result, $responseCode);
    }

    // function to update the users values 

    public function updateUser(Request $request, $id)
    {
        // validators

        $validator = Validator::make($request->all(), [
            'name' => "required|string",
            'email' => "required|string|unique:users",
            'email' => "required|numeric",
            'phone' => "required|min:6",
        ]);

        if ($validator->fails()) {
            $result = array('status' => false, 'message' => "validation error occured", 'error_message' => $validator->error());

            return response()->json($result, 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => bcrypt($request->password),
        ]);
        // update code 
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->save();

        $result = array('status' => true, 'message' => "user value has been updated", 'data' => $user);

        return response()->json($result);
    } 
}
