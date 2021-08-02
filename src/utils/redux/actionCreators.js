import { INIT_PAINTINGS, SOLD_PAINTINGS, ADD_CART } from './actionTypes'

export function initPaintingsAC(payload) {
  return { type: INIT_PAINTINGS, payload }
}

export function soldPaintingsAC(payload) {
  return { type: SOLD_PAINTINGS, payload }
}

export function addCartAC(payload) {
  return { type: ADD_CART, payload }
}
