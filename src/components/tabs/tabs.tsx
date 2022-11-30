import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import './tabs.css'
import Photos from '../photos/photos'
import VideosTab from '../videosTab/videosTab'
import Favourites from '../favourites/favourites'
import PhotoModal from '../photoModal/photoModal';


const Tabs = () => {
    return (
        <>
            <div className='lowerScreen'>
                <div className='t'>
                    <div className="tabsPart">
                        <div className="tabItems">
                            <div className="tabLeft">
                                <NavLink to="/" className='tab'>Photos</NavLink>
                                <NavLink to="/video" className='tab'>Videos</NavLink>
                            </div>
                            <div className="tabRight">
                                <NavLink to="/fav" className='tab'>Favourites</NavLink>
                            </div>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<Photos />} />
                        <Route path="/video" element={<VideosTab />} />
                        <Route path="/fav" element={<Favourites />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Tabs
