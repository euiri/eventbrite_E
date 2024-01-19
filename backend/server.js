import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js' 
import errorHandler from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()

app.use('/api/events',eventRoutes)

app.use(errorHandler)


app.listen(5000, console.log ("5000 is well listening."))