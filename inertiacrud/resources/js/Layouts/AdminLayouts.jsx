import { Link, usePage } from '@inertiajs/react'
import React from 'react'
const AdminLayouts = ({children}) => {
    const {auth} = usePage().props;
  return (
    <>
        <header className="bg-black text-white py-10">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">

                <h2 className='font-bold text-2xl'>ToDo</h2>
                <nav className="flex justify-between items-center grow ml-36">
                    <div className='flex gap-6 justify-start items-center'>
                        <Link href='/dashboard'>Dashboard</Link>
                        <Link href='/todo'>ToDo</Link>
                    </div>
                    <div>{auth.user.name}</div>
                </nav>
                </div>
            </div>
        </header>
        <main>
            <div className="container mx-auto">
                {children}
            </div>
        </main>
    </>
  )
}

export default AdminLayouts