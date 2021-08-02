import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCartAC } from '../../utils/redux/actionCreators'

function Painting({ painting }) {
  const [showInfo, setShowInfo] = useState(false)
  const dispatch = useDispatch()

  return (
    <div
      className="painting"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {painting.sold ? (
        <img
          className={showInfo ? 'img img-hover' : 'img img-hover'}
          src={painting.img}
          alt=""
        />
      ) : (
        <img
        className={showInfo ? 'img img-hover' : 'img'}
        src={painting.img}
        alt=""
      />
      )}

      <div className={showInfo ? 'painting_info' : 'painting_info none'}>
        <div className="info_item">
          <h4>{painting.title}</h4>
          <p>{painting.artist}</p>
        </div>
        <div className="buy_item">
          {painting.sold ? (
            <p>Продана на аукционе</p>
          ) : (
            <>
              {painting.cart ? (
                <>
                  <div className="price">
                    <p className="sale">2000000$</p>
                    <p className="normal">1000000$</p>
                  </div>
                  <button className="btn-cart">В корзине &#10003;</button>
                </>
              ) : (
                <>
                  <div className="price">
                    <p className="sale">2000000$</p>
                    <p className="normal">1000000$</p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(addCartAC(painting.id))
                    }}
                    className="btn-buy"
                  >
                    Купить
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Painting
