import React from 'react'
import BannerCarousel from '../BodyComponent/BannerCarousel'
import FeatureCarousel from '../BodyComponent/FeatureCarousel'
import TopProduct from '../BodyComponent/TopProduct'
import Advantage from '../BodyComponent/Advantage'

export default function Home() {
  return (
    <div>
        <BannerCarousel/>
        <FeatureCarousel/>
        <TopProduct/>
        <Advantage/>
    </div>
  )
}
