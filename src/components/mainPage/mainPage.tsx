import React, { useState } from 'react'
import Footer from '../footer/footer'
import NewHeader from '../newHeader/newHeader'
import Tabs from '../tabs/tabs'
import './mainPage.css'


const MainPage = () => {
  const [newHeader, setNewHeader] = useState(false)
  const changeHeader = () => {
    if (window.scrollY >= 0) {
      setNewHeader(true);
    }
    else {
      setNewHeader(false);
    }
  }

  window.addEventListener('scroll', changeHeader);

  return (
    <>
      {newHeader ? (
        <NewHeader />
      )
        :
        (
          <div>
            <div className='background'>
              <div className="maskImage">
                <div className="imageContent">
                  <div className='logoImage'><img src={require("../../assets/Logo.png")} alt="image" className='logo' /></div>
                  <div className='imageText'>
                    <div className='lineOne'>Discover the world's best photos and videos</div>
                    <div className='lineTwo'>Best memories online</div>

                    <div className='searchPosition'>
                      <input type="text" placeholder='Search photos, videos, artists' className='searchInput' />
                      <button className='searchButton'>SEARCH</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      }
    </>
  )
}

export default MainPage

