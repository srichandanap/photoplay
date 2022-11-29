import React from 'react'
import Footer from '../footer/footer'
import './photoModal.css'

const PhotoModal = (props: any) => {
    return (
        <>
            <div className="header">
                <div className="brownLogo">
                    <img src={require("../../assets/brownLogo.png")} alt="image" />
                </div>
                <div className='searchPosition'>
                    <input type="text" placeholder='Search photos, videos, artists' className='searchInput' />
                    <button className='searchButton'>SEARCH</button>
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