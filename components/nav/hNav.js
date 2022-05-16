import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router';
import MtlLogo from '../common/logo';

const MtlAdminNav = () => {
    const emailRef = React.useRef(null)
    const router = useRouter();
    const { data: session, status } = useSession()
    const [blurAvathar, setBlurAvathar] = useState(false);
    useEffect(() => {

        if (!session) {
            router.push('/tag/blogger')
        }

    }, [session])

    const handleCopyEmailStr = () => {
        if (emailRef && emailRef.current) {
            console.log('--= emailRef.current ', emailRef.current);
            emailRef.current.focus();
            emailRef.current.select();
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
        }
    }

    return (
        <>
            <nav className="max-w-screen-md min-w-full bg-[#ecebe7] shadow-lg border-b border-white">
                <div className="flex justify-between">
                    <div className="m-4">
                        <MtlLogo />
                    </div>
                    {
                        session && session.user && (
                            <div className="dropdown inline-block relative font-RobotoSlab">
                                <button className="py-2 px-4 rounded inline-flex items-center" onClick={() => setBlurAvathar(!blurAvathar)}>
                                    <div className="relative w-12 h-12">
                                        <img className="rounded-full border border-white shadow-sm" src={session.user.image} alt="user image" />
                                        <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
                                    </div>
                                </button>
                                <ul className={`absolute right-3 ${blurAvathar ? 'display' : 'hidden'} w-56 min-w-full bg-gray-100 border-white border`}>
                                    <li className="w-full border-b border-white p-2">
                                        <div className="break-words text-center font-MsMadi">Welcome</div>
                                    </li>
                                    <li className="w-full border-b border-white p-2 flex justify-center">
                                        <div className="break-words">{session.user.name}</div>
                                    </li>
                                    <li className="w-full flex justify-center p-4">
                                        <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded inline-flex items-center" onClick={() => signOut()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <span className="pl-2">Sign Out</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default MtlAdminNav;