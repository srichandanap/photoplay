import React from 'react'
import './newHeader.css'

const NewHeader = () => {
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
        </>
    )
}

export default NewHeader