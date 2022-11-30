import React from 'react'
import './newHeader.css'

const NewHeader = () => {
    return (
        <>
            <div className="newHeader">
                <div className="brownLogo">
                    <img src={require("../../assets/brownLogo.png")} alt="image" />
                </div>
                <div className='searchNewPosition'>
                    <input type="text" placeholder='Search photos, videos, artists' className='searchInputNew' />
                    <button className='searchButtonNew'>SEARCH</button>
                </div>
            </div>
        </>
    )
}

export default NewHeader