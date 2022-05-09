import ProfileIntro from '../projects/profile/intro'
import Portfolio from '../projects/profile/portfolio'
import MyTechLifeStack from '../projects/profile/mytechlife'
import ProfileTechStack from '../projects/profile/techstack'

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
