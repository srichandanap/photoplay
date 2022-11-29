import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import FirstScreen from './views/firstScreen/firstScreen';
import './styles.css';
import PhotoModal from './components/photoModal/photoModal';
import NewHeader from './components/newHeader/newHeader';
// import { NavLink, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    {/* <NewHeader /> */}
      <Routes>

<Route path="/*" element={<FirstScreen />} />
<Route path="/PM" element={<PhotoModal />} />
<Route path="/VM" element={<PhotoModal />} />
</Routes>

        
      
    </>
  );
}

export default App;
