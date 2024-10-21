import React from 'react'
import Navbar from '../components/layout/navbar'
import Hero from '../components/home-component/hero'
import Footer from '../components/layout/footer'
import OurVoice from '../components/home-component/our_voice'
import OurAim from '../components/home-component/our-aim'
import SignIn from '../components/home-component/sign-in'

export default function homescreen() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurVoice />
      <OurAim />
      <SignIn />
      <Footer />
    </div>
  )
}
