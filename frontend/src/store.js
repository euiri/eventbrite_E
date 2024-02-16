import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventDetailsReducer, eventListReducer } from './reducers/eventReducers'
import { cartReducer } from './reducers/cartReducers'
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/orderReducers'

const rootReducer = combineReducers({
  eventList : eventListReducer,
  eventDetails : eventDetailsReducer,
  cart : cartReducer,
  userLogin : userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}


const initialState = {
  cart : {cartItems : cartItemsFromStorage, 
    shippingAddress: shippingAddressFromStorage, 
    paymentMethod: paymentMethodFromStorage},
  userLogin : {userInfo : userInfoFromStorage},  
}

const store = configureStore({
  reducer : rootReducer,
  preloadedState : initialState
})

export default store