import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listEvent } from '../actions/eventActios'
import Event from '../components/Event'
import Loader from '../components/Loader'
import Message from '../components/Message'

const Homescreen = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listEvent())
  }, [dispatch])

  const eventList = useSelector((state) => state.eventList)
  const {loading, events, error} = eventList

  return (
    <>
      <h1>Latest Events!</h1>
      {
        loading ? (<Loader />)
          : error ? (<Message variant='danger'>{error}</Message>)
          : error ? (<Message variant='danger'>{error}</Message>)
          :  
            (<Row>
            {events.map(e => (
              <Col key={e._id} sm={12} md={6} lg={4} xl={3}>
                <Event event={e} />
              </Col>
            ))
          }
        </Row>)

      }
     
    </>
  )
}

export default Homescreen