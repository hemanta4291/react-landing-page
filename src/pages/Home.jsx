import React from 'react'
import AmazingTransection from '../components/AmazingTransection'
import CrateSellSection from '../components/CrateSellSection'
import DiscoverMoreSection from '../components/DiscoverMoreSection'
import FeaturedSection from '../components/FeaturedSection'
import HeroSection from '../components/HeroSection'
import TopCollection from '../components/TopCollection'

const Home = () => {
  return (
    <div className='home'>
      <HeroSection/>
      <AmazingTransection/>
      <TopCollection/>
      <FeaturedSection/>
      <CrateSellSection/>
      <DiscoverMoreSection/>
    </div>
  )
}

export default Home