import React, { useState } from 'react'
import './photos.css'
import PhotoModal from '../photoModal/photoModal';
import { Route, Routes, useNavigate } from 'react-router-dom';


const Photos = () => {

    const photos = JSON.parse(localStorage.getItem("searchedData") || '[]');
    console.log(typeof photos);
    const navigate = useNavigate();

    return (
        <>
            <div className="photo">
                {photos.map((PhotoData: any, i: any) => {
                    return (
                        <>
                            <div className="photoItems" onClick={() => navigate('/PM')}>
                                <div>
                                    <img src={PhotoData && PhotoData.src && PhotoData.src.medium} alt="image" className='photoMeasure' />
                                </div>
                                <div className="heart">
                                    <img src={require('../../assets/favSmall.png')} alt="image" />
                                </div>
                                <div className="personName">
                                    dana
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <Routes>
                <Route path="/PM" element={<PhotoModal />} />
            </Routes>
        </>
    )
}

export default Photos