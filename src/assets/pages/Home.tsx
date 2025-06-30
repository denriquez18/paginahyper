
import { Blog } from '../../components/Blog'
import { Companies } from '../../components/Companies'
import { CTA } from '../../components/CTA'
import { DataCenter } from '../../components/DataCenter'
import { Hero } from '../../components/Hero'
import {Presentation} from '../../components/Presentation'
import { Solutions } from '../../components/Solutions'
import { SuccessStory } from '../../components/SuccessStory'


export const Home = () => {
  return (
    <>
      <Hero />
      <Presentation />
      <Solutions/>
      <SuccessStory/>
      <DataCenter />
      <Blog />
      <Companies />
      <CTA />
    </>
  )
}

