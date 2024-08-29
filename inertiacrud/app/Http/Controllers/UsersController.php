<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function user()
    {
        return Inertia::render('Users', [
            'Status' => 'Ok'
        ]);
    }
}
