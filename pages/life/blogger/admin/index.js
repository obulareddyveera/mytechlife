import React, { useState } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import MtlAdminNav from '../../../../components/nav/hNav';
import MtlSideNav from '../../../../components/nav/sNav';

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  console.log('--== oauth ', session, status);
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Nextjs | Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MtlAdminNav />
      <MtlSideNav sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <div className={`w-full flex justify-start ${sideMenu ? 'pl-64' : 'pl-0'}`}>
        <div className="flex justify-between w-full m-4 p-4 border-b border-[#ecebe7]">
          <div>Breadcrumb</div>
          <div className="flex justify-end">
            <div>
              <button className="mr-3" onClick={() => setSideMenu(!sideMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}