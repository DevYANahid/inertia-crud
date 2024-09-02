import { Link } from '@inertiajs/react';
import React from 'react'

const Pagination = ({links}) => {
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                {links.map((link,i)=>{
                    return(

                    <li key={i}>
                        <Link
                            href={link.url}
                            className={`flex items-center justify-center px-4 
                            h-10 leading-tight text-gray-500 bg-gray-900 border
                             border-slate-900 ${link.active ? "bg-slate-700":"bg-slate-900"} hover:bg-slate-700 hover:text-gray-900`}
                        >
                          <div dangerouslySetInnerHTML={{__html:link.label,}} />

                         
                        </Link>
                    </li>
                    );
                })}

                </ul>
            </nav>
        </>

    )
}

export default Pagination