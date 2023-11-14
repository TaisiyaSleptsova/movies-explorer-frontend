import React from 'react'
import './Preloader.css'
import { useLocation } from 'react-router-dom';



const Preloader = () => {

  const location = useLocation()

  return (
    <div className={`preloader ${location.pathname === "/movies" ? 'preloader_center' : ''}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader
