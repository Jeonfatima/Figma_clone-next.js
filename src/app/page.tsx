import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RecentPosts from './components/RecentPosts';
import FeaturedWorks from './components/FeaturedWorks';
import Footer from './components/Footer';


import React from 'react'

const page = () => {
  return (
    <div>
         <Header />
      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />
    </div>
  )
}

export default page
