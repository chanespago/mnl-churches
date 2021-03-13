import React from 'react'
import '../assets/css/Cards.css'

import cardBG from '../assets/img/manila-churches.png'

export const Cards = ({children}) => {

  return (
    <div className='cards'>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {children}
            </ul>
          </div>
        </div>
    </div>
  )
}
