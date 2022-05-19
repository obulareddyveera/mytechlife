import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router';
import MtlLogo from '../common/logo';
import { faVideo, faMoneyCheck, faChalkboardTeacher, faJarWheat, faDashboard, faArrowRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const MtlAdminNav = () => {
    const router = useRouter();
    const [options, setOptions] = useState([])
    const { data: session } = useSession()
    useEffect(() => {

        if (!session) {
            router.push('/tag/blogger')
        }

    }, [session])

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

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <FontAwesomeIcon className="w-6 h-6" icon={faBars} />
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                options && options.map(rec => {
                                    return (
                                        <>
                                            <li>
                                                <a href={`#/${rec.link}`}>
                                                    <FontAwesomeIcon className="w-4 h-4" icon={rec.icon} />
                                                    {rec.title}
                                                    {
                                                        rec.items && rec.items.length > 0 && (
                                                            <FontAwesomeIcon className="w-3 h-3" icon={faAngleRight} />
                                                        )
                                                    }
                                                </a>
                                                {
                                                    rec.items && rec.items.length > 0 && (
                                                        <ul className="p-2 shadow bg-base-100 rounded-box w-52">
                                                            {
                                                                rec.items.map(entity => {
                                                                    return (
                                                                        <li key={entity.link}>
                                                                            <a href={`#/${entity.link}`}>

                                                                                {entity.title}
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    )
                                                }

                                            </li>

                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <MtlLogo />
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-left">
                        <label tabIndex="1" className="btn btn-ghost btn-circle">
                            <img className="rounded-full border border-white shadow-sm" src={session.user.image} alt="user image" />
                        </label>
                        <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <div className="break-words">{session.user.name}</div>
                            </li>
                            <li>
                                <button className="btn btn-secondary text-white gap-2" onClick={signOut}>
                                    <FontAwesomeIcon className="w-6 h-6" icon={faRightFromBracket} />
                                    Sign Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MtlAdminNav;