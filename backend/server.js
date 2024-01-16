import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventsRoutes.js' 

dotenv.config()
connectDB()

const app = express()
app.use('/api/events',eventRoutes)


app.listen(5000, console.log ("5000 is well listening."))