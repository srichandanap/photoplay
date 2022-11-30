import React, { useState, useEffect } from 'react'
import Footer from '../footer/footer'
import NewHeader from '../newHeader/newHeader'
import Tabs from '../tabs/tabs'
import './mainPage.css'
import axios from 'axios'

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

  const options = {
    method: 'GET',
    headers: {
      Accept: "application/json",
      Authorization: "563492ad6f917000010000011c84a4f2e21644b5a7e9df7302de0e94",
    }
  };
  const getPhotos = async () => {

    const URL = `https://api.pexels.com/v1/search?query=people`;

    try {
      const response = await axios.get(URL, options);
      console.log(response);
      return response?.data;


    }
    catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getPhotos();


  }, [])


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
                  <div className='logoMobileImage'><img src={require("../../assets/logoMobile.png")} alt="image" className='logoMobile' /></div>
                  <div className='imageText'>
                    <div className='lineOne'>Discover the world's best photos & videos</div>
                    <div className='lineTwo'>Best memories online</div>

                    <div className='searchPosition'>
                      <input type="text" placeholder='Search photos, videos, artists' className='searchInput' />
                      <button className='searchButton'>SEARCH</button>
                      <img src={require('../../assets/shape.png')} alt="image" className='searchMobile' />
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

