import React, { useEffect, useState } from 'react';

const MtlSideNav = ({ sideMenu, setSideMenu }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [options, setOptions] = useState([])
    const handleResize = () => {
        if (window.innerWidth > 767) {
            setSideMenu(true)
            setIsMobile(false)
        } else if (window.innerWidth < 767) {
            setSideMenu(false)
            setIsMobile(true)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        setOptions([
            {
                id: Math.random(),
                title: 'Posts',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>,
                expand: false,
                items: [
                    {
                        id: Math.random(),
                        title: 'Active',
                    },
                    {
                        id: Math.random(),
                        title: 'Achieved',
                    },
                    {
                        id: Math.random(),
                        title: 'Draft',
                    }
                ]
            },
            {
                id: Math.random(),
                title: 'YouTube',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>,
                expand: false,
                items: [
                    {
                        id: Math.random(),
                        title: 'Templates',
                    },
                    {
                        id: Math.random(),
                        title: 'Notes',
                    },
                ]
            },
            {
                id: Math.random(),
                title: 'Finance',
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>,
                expand: false,
                items: [
                    {
                        id: Math.random(),
                        title: 'Expense',
                    },
                    {
                        id: Math.random(),
                        title: 'Credits',
                    },
                    {
                        id: Math.random(),
                        title: 'Transactions',
                    },
                ]
            }
        ])
    }, [])

    const handleExpandToggle = (record, val) => {
        const temp = [];
        options.forEach(item => {
            if (item.id === record.id) {
                item.expand = val;
            }
            temp.push({ ...item })
        })
        setOptions(temp)
    }

    return (
        <div className={`absolute ${isMobile ? 'w-full' : 'w-60 px-1'} shadow-md bg-white ${sideMenu ? 'display' : 'hidden'} h-full`}>
            <div className={`flex justify-start ${isMobile ? 'display' : 'hidden'} m-4 p-4 border-b border-red-700`}>
                <button onClick={() => setSideMenu(!sideMenu)} className="text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <ul className="relative">
                {
                    options && options.map((rec, index) => {
                        return (
                            <li className="relative" key={`sNav${index}${new Date().getTime()}`}>
                                <button  onClick={() => handleExpandToggle(rec, !rec.expand)} className="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                    <div className="flex justify-between w-full border-b border-[#ecebe7]">
                                        <div className="flex">
                                            <span className="mr-2">{rec.icon}</span>
                                            <span>{rec.title}</span>
                                        </div>
                                        {rec.items && rec.items.length > 0 && (
                                            <div>
                                                {
                                                    rec.expand ? (
                                                        <button>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    ) : (
                                                        <button>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    )
                                                }
                                            </div>
                                        )}
                                    </div>
                                </button>
                                {
                                    rec.expand && rec.items && rec.items.length > 0 && (
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                            {
                                                rec.items.map((item, idx) => {
                                                    return (
                                                        <li key={`sNav${idx}${new Date().getTime()}`} className="relative border-b border-[#ecebe7]">
                                                            <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">{item.title}</a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    )
                                }

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MtlSideNav;