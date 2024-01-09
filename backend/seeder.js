import dotenv from 'dotenv'
import users from './data/users'
import events from './data/events'
import User from './models/userModel'
import Event from './models/eventModel'
import connectDB from './config/db'

dotenv()
connectDB()

