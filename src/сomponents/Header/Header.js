import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
  const cartState = useSelector((state) => state.paintings.cart)
  return (
    <div className="header">
      <div className="logo">прекрасная Работа, <br/>достойная каждого</div>
      <div className="card">Корзина <span className="cart-count">{cartState.length}</span></div>
    </div>
  )
}

export default Header
