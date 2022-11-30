import React from 'react'
import Footer from '../footer/footer'
import './photoModal.css'

const PhotoModal = () => {
      
       
    return (
        <>
            <div className="headerModal">
                <div className="brownLogoModal">
                    <img src={require("../../assets/brownLogo.png")} alt="image" />
                </div>
                <div className='searchPositionModal'>
                    <input type="text" placeholder='Search photos, videos, artists' className='searchInputModal' />
                    <button className='searchButtonModal'>SEARCH</button>
                </div>
            </div>
            <div className="displayPhoto">
                <img src={require("../../assets/photoModal.png")} alt="image" className='modalPhoto'/>
            </div>
            <Footer />
        </>
    )
}

export default PhotoModal