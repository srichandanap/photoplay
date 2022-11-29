import React from 'react'
import Footer from '../../components/footer/footer'
import MainPage from '../../components/mainPage/mainPage'
import PhotoModal from '../../components/photoModal/photoModal'
import Tabs from '../../components/tabs/tabs'

const FirstScreen = () => {
  return (
    <>
      <MainPage />
      <Tabs />
          <Footer />
      {/* <PhotoModal /> */}
    </>
  )
}

export default FirstScreen
