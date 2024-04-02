import React from 'react'
import Header from './_components/component/nav/Header'
import HeroSection from './_components/component/HeroSection'
import FeaturesIntro from './_components/component/FeaturesIntro'
import { Poppins } from "next/font/google"
import Action from './_components/component/Action'
import Footer from './_components/component/Footer'
import Business from './_components/component/Business'
import HowItWork from './_components/component/HowItWork'
const aleo = Poppins({ weight: ["100", "200", "300", "400"], subsets: ["latin"] })

const Landingpage = (
 
) => {
  return (
    <div className={aleo.className} style={{ overflow: "hidden" }}>
      <HeroSection />
      <FeaturesIntro />
      <Business />
      <HowItWork />
      <Action />
    </div>
  )
}

export default Landingpage