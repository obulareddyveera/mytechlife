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
                title: 'Dashboard',
                icon: <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                </svg>,
                expand: true,
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
        <div className={`${isMobile ? 'w-full' : 'w-60'} h-full shadow-md bg-white px-1 absolute ${sideMenu ? 'display' : 'hidden'}`}>
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
                                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                    <div className="flex justify-between w-full border-b border-[#ecebe7]">
                                        <div className="flex">
                                            <span className="mt-1">{rec.icon}</span>
                                            <span>{rec.title}</span>
                                        </div>
                                        {rec.items && rec.items.length > 0 && (
                                            <div>
                                                {
                                                    rec.expand ? (
                                                        <button onClick={() => handleExpandToggle(rec, !rec.expand)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    ) : (
                                                        <button onClick={() => handleExpandToggle(rec, !rec.expand)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    )
                                                }
                                            </div>
                                        )}
                                    </div>
                                </a>
                                {
                                    rec.expand && rec.items && rec.items.length > 0 && (
                                        <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                            {
                                                rec.items.map((item, idx) => {
                                                    return (
                                                        <li  key={`sNav${idx}${new Date().getTime()}`} className="relative border-b border-[#ecebe7]">
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