<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Posts;

class postsController extends Controller
{

    public function show($slug){

        return view('posts', [
            'post' => Posts::where('slug', $slug)->firstOrFail()
        ]);
    }
}

