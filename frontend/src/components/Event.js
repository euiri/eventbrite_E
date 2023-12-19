import React from 'react'
import { Card } from 'react-bootstrap'


const Event = (event) => {
  return (
    <Card className='my-5 p-3 rounded'>
      <Card.Img src={event.image} variant='top' />
      <Card.Body>
        <Card.Title as='div'>
            <strong>{event.name}</strong>
        </Card.Title>
        <Card.Text as='div'>
          <span> 
            {event.description}
            {event.organizer}
            {event.date}
            {event.time}
            {event.duration}
            {event.location}
          </span>
          

          Rating
        </Card.Text>
        <Card.Text as='h3'>
          ${event.price}
        </Card.Text>


      </Card.Body>



    </Card> 

  )
}

export default Event