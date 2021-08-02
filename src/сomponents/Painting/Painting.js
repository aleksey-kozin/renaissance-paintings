import React, { useState } from 'react'

function Painting({ painting }) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div
      className="painting"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img
        className={showInfo ? 'img img-hover' : 'img'}
        src={painting.img}
        alt=""
      />
      <div className={showInfo ? 'painting_info' : 'painting_info none'}>
        <div className="info_item">
          <h4>{painting.title}</h4>
          <p>{painting.artist}</p>
        </div>
        <div className="buy_item">
          <div className="price">
            <p className="sale">2000000$</p>
            <p className="normal">1000000$</p>
          </div>
          <button className="btn-buy">Купить</button>
        </div>
      </div>
    </div>
  )
}

export default Painting
