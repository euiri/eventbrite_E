import express from 'express'
import { getEvent, getEventById } from '../controllers/eventController.js'

const router = express.Router()

// @desc    Fetch all events
// @route   GET /api/events/
// @access  public
router.get('/', getEvent)

// @desc    Fetch single eventt by id
// @route   GET /api/events/:id
// @access  public
router.get('/:id', getEventById)


export default router