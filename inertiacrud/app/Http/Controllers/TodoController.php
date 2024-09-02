<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        return Inertia::render('Todo',
    [
        'todos' => Todo::latest()->paginate(4)
    ]);
    }
    public function store(Request $request)
    {
       $data = $request->validate([
        'name' => 'required',
        'is_complete' => 'boolean'
       ]);

       Todo::create($data);

       return back()->with('message','To Do Added Successfully');
       
    }

    public function edit(Todo $todo)
    {
        return Inertia::render('Edit',[
            'todo' => $todo
        ]);
    }

    public function update(Request $request, Todo $todo)
    {
        $data = $request->validate([
            'name' => 'required | min:3'
        ]);

        $todo->update($data);
        return redirect(route('todo.index'))->with('message','Todo updated successfully');
    }
}
