import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  initPaintingsAC,
  soldPaintingsAC,
} from '../../utils/redux/actionCreators'
import Painting from '../Painting/Painting'

function Main(props) {
  const paintingsState = useSelector((state) => state.paintings.paintings)
  const dispatch = useDispatch()
  const paintingSearchField = useRef()
  const [active, setActive] = useState(true)
  const [foundPaintings, setFoundPaintings] = useState()

  const handleSeachPaintings = () => {
    setFoundPaintings(
      paintingsState.filter((painting) =>
        painting.title
          .toLowerCase()
          .includes(paintingSearchField.current.value.toLowerCase())
      )
    )
  }

  return (
    <>
      <div className="nav">
        <ul className="nav__menu">
          <li
            onClick={() => {
              dispatch(initPaintingsAC())
              setActive(true)
            }}
            className={active ? 'nav__item selected' : 'nav__item'}
          >
            Все
          </li>
          <li
            onClick={() => {
              dispatch(soldPaintingsAC())
              setActive(false)
            }}
            className={active ? 'nav__item' : 'nav__item selected'}
          >
            Проданные на аукционе
          </li>
        </ul>
        <form className="nav__search">
          <input
            className="search"
            type="search"
            autoComplete="off"
            placeholder="Поиск по названию картины"
            ref={paintingSearchField}
            onChange={handleSeachPaintings}
            defaultValue={foundPaintings}
          />
          <button className="btn" type="button">
            НАЙТИ &#128269;
          </button>
        </form>
      </div>
      <div className="paintings">
        {foundPaintings
          ? foundPaintings.map((painting) => (
              <Painting key={painting.id} painting={painting} />
            ))
          : paintingsState.map((painting) => (
              <Painting key={painting.id} painting={painting} />
            ))}
      </div>
    </>
  )
}

export default Main
