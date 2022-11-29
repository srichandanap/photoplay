import React from 'react'
import Footer from '../footer/footer'
import '../photoModal/photoModal.css'

const FavouriteModal = () => {
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
            <Footer />
        </>
    )
}

export default FavouriteModal