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
import GoogOAuth from '../../../projects/blogger/oauth';

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
                        <GoogOAuth onGoogleSignIn={handleSignin} />
                    </section>
                )
            }
        </>
    )
}