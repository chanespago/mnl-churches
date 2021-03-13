import React from 'react'
import '../assets/css/Jumbotron.css'

// Image Import
import imgJumbotron from '../assets/img/manila-churches.png'

export const Jumbotron = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="jumbotron-wrapper">
          <div className="jumbotron-content">
            <img src={imgJumbotron} className="jumbotron-img" alt="Manila Churches"/>
          </div>
        </div>
      </div>
    </>
  )
}

