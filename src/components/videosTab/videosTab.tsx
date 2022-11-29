import React from 'react'
import '../photos/photos.css'
import { Route, Routes, useNavigate } from 'react-router-dom';

const VideosTab = () => {
    const navigate = useNavigate();
  return (
    <>
       <div className="photo">
                <div className="photoItems" onClick={() => navigate('/VM')}>
                    <div>
                        <img src={require('../../assets/photos.png')} alt="image" className='photoMeasure' />
                    </div>
                    <div className="heart">
                        <img src={require('../../assets/favSmall.png')} alt="image" />
                    </div>
                    <div className="videoButton">
                        <img src={require('../../assets/v_btn.png')} alt="image" />
                    </div>
                    <div className="personName">
                        dana
                    </div>

                </div>

            </div>
    </>
  )
}

export default VideosTab