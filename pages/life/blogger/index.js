import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()
    const { data: session } = useSession();

    const handleSignin = (e) => {
        e.preventDefault()
        signIn('google')
    }

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }

    useEffect(() => {
        if (session) {
            router.push('/life/blogger/admin')
        }
    }, [session])

    return (
        <>
            <Head>
                <title>My Tech Life</title>
            </Head>
            <section className="h-screen w-screen bg-[#ecebe7]">
                <div className="flex flex-col items-center justify-center w-full h-fit">
                    <div className="flex flex-col items-center justify-center mt-52 ">
                        <div className="m-4 p-4 pb-0 flex justify-center md:justify-end border-b border-white">
                            <h2 className="text-4xl text-center font-MsMadi text-gray-500">My Tech Life</h2>
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
        </>
    )
}