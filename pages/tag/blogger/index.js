import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head';
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import Link from 'next/link';

import MtlAdminNav from '../../../components/nav/hNav';
import MtlSideNav from '../../../components/nav/sNav';
import MtlBreadcrumb from '../../../components/breadcrumb';
import MtlLogo from '../../../components/common/logo';
import Templates from '../../../projects/blogger/templates';
import TemplatesCurd from '../../../projects/blogger/templates/curd';
import TemplatesDashboard from '../../../projects/blogger/templates/dashboard';
import Whiteboard from '../../../projects/whitebord';
import Storyboard from '../../../projects/blogger/storyboard';

export default function Header() {
    const [links, setLinks] = useState([])
    const [sideMenu, setSideMenu] = useState(false);
    const { data: session } = useSession();

    const handleSignin = (e) => {
        e.preventDefault()
        signIn('google')
    }

    const breadcrumbClient = {
        get: () => {
            return links
        },
        set: (list) => {
            setLinks(list)
        },
        pop: () => {
            const temp = [...links]
            temp.pop();
            setLinks(temp)
        },
        push: (entity) => {
            console.log('--== handleBreadcrumb ', entity);
            const temp = [...links]
            temp.push(entity);
            setLinks(temp)
        }
    };

    return (
        <>
            <Head>
                <title>Tag | Veera</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                session ? (

                    <React.StrictMode>
                        {
                            typeof window !== undefined && (
                                <HashRouter>
                                    <MtlAdminNav />
                                    <section className="min-w-screen min-h-screen bg-[#f5f5f5]">
                                        <div className={`w-full flex flex-col h-full`}>
                                            <MtlBreadcrumb sideMenu={sideMenu} setSideMenu={setSideMenu} breadcrumb={breadcrumbClient} mtlLinks={links} />
                                            <div className="p-2 m-2">
                                                <Routes>
                                                    <Route path="/" element={<Templates breadcrumb={breadcrumbClient} />}>
                                                        <Route path="dashboard" element={<TemplatesDashboard />} />
                                                        <Route path="new" element={<TemplatesCurd />} />
                                                    </Route>
                                                    <Route path="whiteboard" element={<Whiteboard sideMenu={sideMenu} setSideMenu={setSideMenu} breadcrumb={breadcrumbClient} />} />
                                                    <Route path="storyboard" element={<Storyboard sideMenu={sideMenu} setSideMenu={setSideMenu} breadcrumb={breadcrumbClient} />} />
                                                </Routes>
                                            </div>
                                        </div>
                                    </section>
                                </HashRouter>)
                        }
                    </React.StrictMode>


                ) : (
                    <section className="h-screen w-screen bg-[#ecebe7]">
                        <div className="flex flex-col items-center justify-center w-full h-fit">
                            <div className="flex flex-col items-center justify-center mt-52 ">
                                <div className="m-4 p-4 pb-0 flex justify-center md:justify-end border-b border-white">
                                    <MtlLogo />
                                </div>
                                <button onClick={handleSignin}>
                                    <div className="flex text-white bg-[#4285f4] border-r-2 shadow-xl relative w-fit pr-12 h-[46px] rounded">
                                        <div className="m-1 bg-white w-[40px] h-[40px]">
                                            <img className="absolute mt-2 ml-2 w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                        </div>
                                        <p className="text-center align-middle p-2"><b>Sign in with google</b></p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}