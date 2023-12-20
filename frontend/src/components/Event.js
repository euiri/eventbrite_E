import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'


const Event = ({event}) => {
  return (
    <Card className='my-5 p-3 rounded'>
      <Link to={`/event/${event._id}`}> 
        <Card.Img src={event.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/event/${event._id}`}> 
          <Card.Title as='div'>
              <strong>{event.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <span> 
            {/* {event.description} */}
            <br/>
            Organizer: {event.organizer}
            <br/>
            Date/Time: {event.date} {event.time}
            {/* Duration: {event.duration} */}
            <br/>
            Location: {event.location.venue} 
            <br />
            {event.location.city}, {event.location.state}
            <br />            
          </span>    
          <Rating value = {event.rating} text={`${event.numReviews} review`} />
        </Card.Text>
        <Card.Text as='h3'>
          ${event.price}
        </Card.Text>
      </Card.Body>



    </Card> 

  )
}

export default Event