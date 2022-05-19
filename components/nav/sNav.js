import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faRectangleList, faStore, faBook, faVideo, faMoneyCheck, faArrowUp, faAngleUp, faAngleDown, faChalkboardTeacher, faJarWheat, faDashboard } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MtlSideNav = ({ sideMenu, setSideMenu }) => {
    const navigate = useNavigate();
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
                icon: faDashboard,
                link: 'dashboard'
            },
            {
                id: Math.random(),
                title: 'Storyboard',
                icon: faJarWheat,
                link: 'storyboard'
            },
            {
                id: Math.random(),
                title: 'Whiteboard',
                icon: faChalkboardTeacher,
                link: 'whiteboard'
            },
            {
                id: Math.random(),
                title: 'YouTube',
                icon: faVideo,
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
                icon: faMoneyCheck,
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
        if (record && record.items && record.items.length > 0) {
            const temp = [];
            options.forEach(item => {
                if (item.id === record.id) {
                    item.expand = val;
                }
                temp.push({ ...item })
            })
            setOptions(temp)
        } else {
            navigate(record.link)
        }

    }

    return (
        <div className={`absolute font-RobotoSlab text-md ${isMobile ? 'w-full' : 'w-60 px-1'} shadow-md bg-white ${sideMenu ? 'display' : 'hidden'} h-full`}>
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
                            <li className="relative border-b border-[#ecebe7]" key={`sNav${index}${new Date().getTime()}`}>
                                <button onClick={() => handleExpandToggle(rec, !rec.expand)} className="w-full flex items-center py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                    <div className="flex justify-between w-full">
                                        <div className="flex">
                                            <span className="mr-2 mt-1">
                                                <FontAwesomeIcon className="w-4 h-4" icon={rec.icon} />
                                            </span>
                                            <span>{rec.title}</span>
                                        </div>
                                        {rec.items && rec.items.length > 0 && (
                                            <div>
                                                {
                                                    rec.expand ? (
                                                        <button>
                                                            <FontAwesomeIcon className="w-4 h-4" icon={faAngleUp} />
                                                        </button>
                                                    ) : (
                                                        <button>
                                                            <FontAwesomeIcon className="w-4 h-4" icon={faAngleDown} />
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
                                                        <li key={`sNav${idx}${new Date().getTime()}`} className="relative">
                                                            <a href="#!" className="flex items-center py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">{item.title}</a>
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