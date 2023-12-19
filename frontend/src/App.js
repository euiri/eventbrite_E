import {Container} from 'react-bootstrap'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'

const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Container>
          <Homescreen/>
        
        </Container>
      </main>
      <Footer/>
    </>
    
  )
}

export default App