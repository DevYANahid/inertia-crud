import React, { useState } from 'react'
import AdminLayouts from '@/Layouts/AdminLayouts';
import Pagination from '@/Layouts/Pagination';
import { router, useForm, usePage } from '@inertiajs/react';

const Edit = ({todo}) => {

    const [processing,setProcessing] = useState(false)
    const {flash,errors} = usePage().props;

    const [newTodo, setNewTodo] = useState(todo.name);

    const {data,setData,reset} = useForm({
        name : todo.name,
    });


    const handleUpdate = (e)=>{
        setProcessing(true);
        e.preventDefault();
        router.post(`/todo/edit/${todo.id}`,{
            _method : 'patch',
            name:data.name
        })}

  return (
    <AdminLayouts>
        <div className="max-w-4xl mx-auto">
            <h2 className='font-semibold text-4xl text-center mb-4 mt-4'>Todo Edit : {todo.name}</h2>

            {flash.message && (
            <div className="py-2 px-3 rounded-md bg-green-900 text-center">
                {flash.message}
            </div>
            )}
            <form action="" onSubmit={handleUpdate}>
                <div className="flex items-center gap-4 mt-4">
                    <input type="text" placeholder='enter todo' className='px-3 py-2 rounded-md grow' 
                    value={data.name} onChange={(e)=>{
                        setData('name',e.target.value)
                    }}/>
                    <button className='px-3 py-2 rounded-md bg-indigo-400'>{processing ? 'processing...':'UPDATE' }</button>
                </div>
            </form>
            {errors.name && (
                <div className="text-red-600">
                {errors.name}
            </div>
            )}
        </div>

        
    </AdminLayouts>
  )
}

export default Edit