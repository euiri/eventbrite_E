import {Container} from 'react-bootstrap'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EventScreen from './screens/EventScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

const App = () => {
  return (
    <>
    <Router>
        <Header/>
        <main>
          <Container>
            <Routes>
              <Route path='/' exact element={<Homescreen />} />
              <Route path='/event/:id' element={<EventScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/cart/:id' element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen/>} />
              <Route path='/shipping' element={<ShippingScreen/>} />
              <Route path='/payment' element={<PaymentScreen/>} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />

            </Routes>
          
          </Container>
        </main>
        <Footer/>
      </Router>
    </>
    
  )
}

export default App