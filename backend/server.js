import express from 'express'
import events from './data/events.js'

const app = express()
app.get('/api/events',(req, res)=>{
  res.json(events)
})

app.get('/api/event/:id', (req,res)=>{
  const event = events.find(e => e._id===req.params.id)
  res.json(event)
})

app.listen(5000, console.log ("5000 is well listening."))