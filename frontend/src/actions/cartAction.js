import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, RESET_QUANTITY } from "../constants/cartConstant"

export const addToCart = (id, qty) => async(dispatch, getState) => {
  const {data} = await axios.get(`/api/events/${id}`)
  dispatch({
    type : CART_ADD_ITEM,
    payload : {
      event: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      date: data.date,
      time: data.time,
      quantity_available: data.quantity_available,
      qty
    }
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch ({
    type: CART_REMOVE_ITEM,
    payload : id
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const resetQty = (id) => (dispatch) => {
  dispatch ({
    type: RESET_QUANTITY,
    payload : id
  })
}