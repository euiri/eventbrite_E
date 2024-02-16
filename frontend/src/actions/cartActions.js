import axios from "axios"
import { CART_ADD_ITEM, CART_EMPTY_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, RESET_QUANTITY } from "../constants/cartConstants"

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

export const emptyCart = () => (dispatch) => {
  localStorage.removeItem('cartItems');
    
  dispatch({
    type: CART_EMPTY_ITEM
    })
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch ({
    type: CART_REMOVE_ITEM,
    payload : id
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch ({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data
  })
  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch ({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data
  })
  localStorage.setItem('paymentMethod', JSON.stringify(data))
}

export const resetQty = (id) => (dispatch) => {
  dispatch ({
    type: RESET_QUANTITY,
    payload : id
  })
}