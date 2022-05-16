import Head from 'next/head';
import ProfileIntro from '../projects/profile/intro'
import Portfolio from '../projects/profile/portfolio'
import MyTechLifeStack from '../projects/profile/mytechlife'
import ProfileTechStack from '../projects/profile/techstack'

export default function Home() {
  return (
    <>
    <Head>
    <title>VEERA | My-Tech-Life</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="h-screen w-screen">
      <ProfileIntro />
      <ProfileTechStack />
      <Portfolio />
      <MyTechLifeStack />
    </div>
    </>
  )
}
