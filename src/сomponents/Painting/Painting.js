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
          className={showInfo ? 'painting__img hover' : 'painting__img hover'}
          src={painting.img}
          alt=""
        />
      ) : (
        <img
          className={showInfo ? 'painting__img hover' : 'painting__img'}
          src={painting.img}
          alt=""
        />
      )}

      <div className={showInfo ? 'painting__info' : 'painting__info none'}>
        <div className="painting__item">
          <h4>{painting.title}</h4>
          <p>{painting.artist}</p>
        </div>
        <div className="painting__buy">
          {painting.sold ? (
            <p>Продана на аукционе</p>
          ) : (
            <>
              {painting.cart ? (
                <>
                  <div className="painting__price">
                    <p className="painting__sale">2000000$</p>
                    <p className="painting__regular">1000000$</p>
                  </div>
                  <button className="painting__btn__cart">
                    В корзине &#10003;
                  </button>
                </>
              ) : (
                <>
                  <div className="painting__price">
                    <p className="painting__sale">2000000$</p>
                    <p className="painting__regular">1000000$</p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(addCartAC(painting.id))
                    }}
                    className="painting__btn__buy"
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
