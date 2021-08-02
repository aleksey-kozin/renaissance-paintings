import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
  const cartState = useSelector((state) => state.paintings.cart)
  return (
    <div className="header">
      <div className="header__logo">
        прекрасная Работа, <br />
        достойная каждого
      </div>
      <div>
        Корзина <span className="header__card">{cartState.length}</span>
      </div>
    </div>
  )
}

export default Header
