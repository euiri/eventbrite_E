import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import {Row, Col, Image, Card, Button, ListGroup} from 'react-bootstrap'
import Rating from '../components/Rating'

const EventScreen = () => {
  const params = useParams();
  const [event, setEvent] = useState({})
  useEffect (() => {
    const fetchEvent = async () => {
      const {data} = await axios.get(`/api/event/${params.id}`)
      setEvent(data)
    }
    fetchEvent()
  })
  const venue = event.location && event.location.venue;
  const address = event.location && event.location.address;
  const city = event.location && event.location.city;
  const state = event.location && event.location.state;
  const zip = event.location && event.location.zip;


  return (
    <>
      <Link className='btn btn-light my3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={9}>
          <Image src={event.image} alt={event.name} fluid />
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{event.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>{event.description}</h4>
              </ListGroup.Item>
            <ListGroup.Item>
              Organizer: {event.organizer}
            </ListGroup.Item>
            <ListGroup.Item>
              Date/Time: {event.date}, {event.time}
            </ListGroup.Item>
            <ListGroup.Item>
              Duration: {event.duration}
            </ListGroup.Item>
            <ListGroup.Item>
              Location: {venue}
              <br/>
                  {address},{city}, {state}, {zip}
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={event.rating} text={`${event.numReviews} reviews`} />            
            </ListGroup.Item>
            <ListGroup.Item>
                Price: ${event.price}
              </ListGroup.Item>
              
          </ListGroup>
        </Col>
        
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${event.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {event.quantity_available > 0 ? 'Available' : 'Sold-out'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={event.quantity_available === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>

        </Col>


      </Row>
    
      
      
    </>
  )
}

export default EventScreen