import AdminLayouts from '@/Layouts/AdminLayouts';
import Pagination from '@/Layouts/Pagination';
import { Link, router, useForm, usePage } from '@inertiajs/react';
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Todo = ({todos}) => {

    

    const {flash,errors} = usePage().props;
    console.log(flash.message);


    const {data,setData,reset} = useForm({
        name : "",
    });
    
    const todoStore = (e)=>{
        e.preventDefault();
        router.post("/todo",data,{
            onSuccess : ()=>{
                reset()
            }
        });
    }
  return (
    <AdminLayouts>
        <div className="max-w-4xl mx-auto">
            <h2 className='font-semibold text-4xl text-center mb-4 mt-4'>Todo List</h2>

            {flash.message && (
            <div className="py-2 px-3 rounded-md bg-green-900 text-center">
                {flash.message}
            </div>
            )}
            <form action="" onSubmit={todoStore}>
                <div className="flex items-center gap-4 mt-4">
                    <input type="text" placeholder='enter todo' className='px-3 py-2 rounded-md grow' onChange={(e)=>setData('name', e.target.value)} 
                    value={data.name}/>
                    <button className='px-3 py-2 rounded-md bg-indigo-400'>Save</button>
                </div>
            </form>
            {errors.name && (
                <div className="text-red-600">
                {errors.name}
            </div>
            )}

            {todos.data.map((todo,i)=>{
                return (
                    <div key={i} className="flex justify-between items-center mt-3 py-3 px-6 bg-green-300 rounded-md">
                    <h1>{todo.name}</h1>
                    <div className='flex gap-2 ' >
                       <Link href={`todo/edit/${todo.id}`}><FiEdit size={20} /></Link> 
                        |<MdDelete size={20} />
                    </div>
                    
                </div>
                );
                })}
                
            
            
            {/* <var> <div className="flex justify-between items-center mt-3 py-3 px-6 bg-red-500 rounded-md">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <div>Edit | Hapus</div>
            </div></var> */}
            
            <div className="mt-5 flex justify-end">
                <Pagination links = {todos.links}/>
            </div>
        </div>

        
    </AdminLayouts>
  )
}

export default Todo