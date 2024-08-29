import AdminLayouts from '@/Layouts/AdminLayouts';

const Todo = () => {
  return (
    <AdminLayouts>
        <div className="max-w-4xl mx-auto">
            <h2 className='font-semibold text-4xl text-center mb-4 mt-4'>Todo List</h2>
            <form action="">
                <div className="flex items-center gap-4 mt-4">

                <input type="text" placeholder='enter todo' className='px-3 py-2 rounded-md grow' />
                <button className='px-3 py-2 rounded-md bg-indigo-400'>Save</button>
                </div>
            </form>
            <div className="flex justify-between items-center mt-3 py-3 px-6 bg-green-300 rounded-md">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <div>Edit | Hapus</div>
            </div>
            <div className="flex justify-between items-center mt-3 py-3 px-6 bg-green-300 rounded-md">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <div>Edit | Hapus</div>
            </div>
            <div className="flex justify-between items-center mt-3 py-3 px-6 bg-green-300 rounded-md">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <div>Edit | Hapus</div>
            </div>
            <div className="flex justify-between items-center mt-3 py-3 px-6 bg-green-300 rounded-md">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <div>Edit | Hapus</div>
            </div>
            <var> <div className="flex justify-between items-center mt-3 py-3 px-6 bg-red-500 rounded-md">
                <h1>Lorem ipsum dolor sit amet.</h1>
                <div>Edit | Hapus</div>
            </div></var>
        </div>
    </AdminLayouts>
  )
}

export default Todo