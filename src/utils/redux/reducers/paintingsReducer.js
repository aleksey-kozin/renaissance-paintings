import {
  INIT_PAINTINGS,
  SOLD_PAINTINGS,
  ADD_CART,
} from '../actionTypes'

const initialState = {
  title: '',
  paintings: [
    {
      id: 1,
      img: '/img/db0eab48a6f2d11e9078fbb3d371082c.jpeg',
      title: 'Рождение Венеры',
      artist: 'Сандро Боттичелли, 1501 г',
      sold: false,
      cart: false,
    },
    {
      id: 2,
      img: '/img/0aac165474911d5d44bf154381a23c80.jpeg',
      title: 'Тайная вечеря',
      artist: 'Леонардо да Винчи, 1495 г',
      sold: false,
      cart: false,
    },
    {
      id: 3,
      img: '/img/96e8963b9c0a825d4e2fa7a9541fbaca.png',
      title: 'Голова ангела',
      artist: 'Рафаэль Санти, 1501 г',
      sold: false,
      cart: false,
    },
    {
      id: 4,
      img: '/img/9934c4217dc69c1e72e6f697050a96e0.png',
      title: 'Весна',
      artist: 'Сандро Боттичелли, 1482 г',
      sold: true,
      cart: false,
    },
    {
      id: 5,
      img: '/img/ed85395911a7c3cdd915ba17f45a5596.png',
      title: 'Мадонна с младенцем',
      artist: 'Роберт Кампен, 1425 г',
      sold: false,
      cart: false,
    },
    {
      id: 6,
      img: '/img/9dd6d5a7314a5bb611488b649bddadfc.png',
      title: 'Данте смотрит на Чистилище',
      artist: 'Аньоло Бронзино, 1530 г',
      sold: false,
      cart: false,
    },
    {
      id: 7,
      img: '/img/2a63dc79f58944d8940fd132e04bc47d.png',
      title: 'Портрет Данте',
      artist: 'Сандро Боттичелли, 1495 г',
      sold: false,
      cart: false,
    },
    {
      id: 8,
      img: '/img/05eaf28e2f55a0fd1430af97e5808006.png',
      title: 'Страшный суд',
      artist: 'Джотто ди Бондоне, 1306 г',
      sold: false,
      cart: false,
    },
    {
      id: 9,
      img: '/img/7e27dd006e85cbd2c3d5c31e2a1f7b97.png',
      title: 'Страшный суд',
      artist: 'Джотто ди Бондоне, 1306 г',
      sold: true,
      cart: false,
    },
    {
      id: 10,
      img: '/img/d9f8aeb893ab78c8ab731e782e6407be.png',
      title: 'Алтарь святого Коломба',
      artist: 'Рогир ван дер Вейден, 1460 г',
      sold: false,
      cart: false,
    },
    {
      id: 11,
      img: '/img/0adf58b0a076728a3c0a1309ca939237.png',
      title: 'Рождение Венеры',
      artist: 'Джотто ди Бондоне, 1306 г',
      sold: false,
      cart: false,
    },
    {
      id: 12,
      img: '/img/c1366773f80ab5b6d2fac6035f08a22f.png',
      title: 'Рождение Венеры',
      artist: 'Джотто ди Бондоне, 1306 г',
      sold: false,
      cart: false,
    },
    {
      id: 13,
      img: '/img/0cb245c3ca1cdf9da0e7e1034088f8c3.png',
      title: 'Рождение Венеры',
      artist: 'Джотто ди Бондоне, 1306 г',
      sold: true,
      cart: false,
    },
  ],
  cart: [],
}

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case INIT_PAINTINGS:
      return initialState

    case SOLD_PAINTINGS:
      return {
        ...state,
        paintings: state.paintings.filter((el) => el.sold === true),
      }

    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        paintings: state.paintings.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              cart: true,
            }
          }
          return el
        }),
      }

    default:
      return state
  }
}

export default contactReducer
