import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"
import { logger } from "../utils/Logger"



class EventsService {

  async getAll(query = {}) {
    const events = dbContext.TowerEvents.find(query)
    return events
  }
  
  async getById(eventId) {
    logger.log('-getById-')
    const event = await dbContext.TowerEvents.findById(eventId)
    if(!event) {
      throw new BadRequest(' Bad ID, try again later.')
    }
    return event
  }
  async createEvent(eventData, userId) {
    eventData.creatorId = userId
    const event = await dbContext.TowerEvents.create(eventData)

    //validate the date lol
    const eventDate =  new Date(event.startDate)
    const today = new Date()

    if (eventDate < today) {
      throw new BadRequest('Invalid date')
    }

    return event
  }
  async editEvent(update, eventId, userId) {
    const original = await this.getById(eventId)
    if(userId != original.creatorId || original.isCanceled == true) {
      throw new Forbidden('Unauthorized, you cant do that')
    }
    
    original.name = update.name || original.name
    original.description = update.description || original.description
    original.coverImg = update.coverImg || original.coverImg
    original.location = update.location || original.location
    original.capacity = update.capacity || original.capacity
    original.startDate = update.startDate || original.startDate
    original.type = update.type || original.type

    original.save()
  }


  async cancelEvent(eventId, userId) {
    const original = await this.getById(eventId)
    if(userId != original.creatorId || original.isCanceled == true) {
      throw new BadRequest('Unauthorized, you cant do that')
    }

    original.isCanceled = true
    original.save()
  }
}

export const eventsService = new EventsService()