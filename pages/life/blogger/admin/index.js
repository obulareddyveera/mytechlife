import Head from 'next/head'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
console.log('--== oauth ', session, status);
  return (
    <>
      <Head>
        <title>Nextjs | Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1 className="text-xl">Authentication in Next.js app using Next-Auth</h1>
        <div className="flex flex-col items-center justify-center">
           {loading && <div className="text-xl">Loading...</div>}
           {
            session &&
              <>
               <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
               <img src={session.user.image} alt="" />
              </>
            }
           {
            !session &&
              <>
               <p className="text-xl">Please Sign in</p>
               <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" />
               <p className="text-xl">GIF by <a href="https://dribbble.com/shots/6915953-Another-man-down/attachments/6915953-Another-man-down?mode=media">Another man</a> </p>
              </>
           }
         </div>
      </main>
    </>
  )
}