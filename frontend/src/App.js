import {Container} from 'react-bootstrap'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import EventScreen from './screens/EventScreen'

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
            </Routes>
          
          </Container>
        </main>
        <Footer/>
      </Router>
    </>
    
  )
}

export default App