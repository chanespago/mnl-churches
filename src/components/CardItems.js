import React from 'react'
import '../assets/css/Cards.css'

export const CardItems = ({children}) => {
  return (
    <>
      <li className="cards__item wave__three">
        <div className="cards__item__mask">
          {children}
        </div>
      </li>
    </>
  )
}
