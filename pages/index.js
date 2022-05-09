import Head from 'next/head'
import Image from 'next/image'
import ProfileIntro from '../projects/profile/intro'
import Portfolio from '../projects/profile/portfolio'
import MyTechLifeStack from '../projects/profile/mytechlife'
import ProfileTechStack from '../projects/profile/techstack'
import styles from '../styles/Home.module.css'
import QuoteOne from '../projects/profile/quotes/_quote1'
import Footer from '../projects/profile/footer'

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <ProfileIntro />
      <ProfileTechStack />
      <Portfolio />
      <MyTechLifeStack />
    </div>
  )
}
