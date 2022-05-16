import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Link from 'next/link';

const MtlBreadcrumb = ({ sideMenu, setSideMenu, breadcrumb }) => {
    const navigate = useNavigate();
    const mtlLinks = breadcrumb.get();
    const handleNavigate = (index, item) => {
        const temp = [...mtlLinks];
        temp.splice(index)
        breadcrumb.set(temp)
        navigate(item.link)
    }

    return (
        <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 md:gap-10 mb-4 pl-4 pt-[2rem] border-b border-[#ecebe7]">
            <div className="flex justify-end md:justify-start">
                <button className="mr-3" onClick={() => setSideMenu(!sideMenu)}>
                    {
                        sideMenu ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        )
                    }

                </button>
            </div>
            <div className="flex justify-start md:justify-end">
                <Link href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </Link>
                {
                    mtlLinks && mtlLinks.map((item, index) => {
                        return (
                            <div className="flex ml-2 mr-2" key={`breadcrumbEntity_${index}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                {
                                    item.isInActive ? (
                                        <div className={`mb-3 pb-3 text-gray-500 cursor-none`}>{item.displayName}</div>
                                    ) : (
                                        <button onClick={() => handleNavigate(index, item)} className={`mb-3 pb-3 ${index === (mtlLinks.length - 1) ? 'text-gray-500 cursor-none' : 'text-blue-400'}`}>
                                            {item.displayName}
                                        </button>
                                    )
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MtlBreadcrumb