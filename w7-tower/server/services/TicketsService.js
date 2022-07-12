
import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
import { logger } from "../utils/Logger"
import { eventsService } from "./EventsService"


class TicketsService {

  async getTicketsByEvent(eventId) {
    const tickets = await dbContext.Tickets.find({eventId}).populate('account').populate('event')
    return tickets
  }
  async getTicketsByUserId(accountId) {
    const tickets = await dbContext.Tickets.find({accountId}).populate('event').populate('account')

    return tickets
  }
  async createTicket(accountId, ticketData) {
    logger.log(ticketData, accountId);
    ticketData.accountId = accountId
    // if (ticketData.accountId != accountId) {
    //   throw new BadRequest('You arent the rifght person')
    // }
    const event = await eventsService.getById(ticketData.eventId)
    const userTickets = await this.getTicketsByUserId(accountId)
    
    logger.log('event fail', event)
    if (event.isCanceled == true || event.capacity <= 0) {
      throw new BadRequest('No Tickets available for this event')
    }

    logger.log(userTickets, 'user tickets fail')
    if (userTickets.find(x => x.eventId == ticketData.eventId)) {
      //already has a ticket
      throw new BadRequest('already own this ticket')
    }
    
    // decrease capacity of event by one
    event.capacity -= 1
    event.save()
    const ticket = await dbContext.Tickets.create(ticketData)
    await ticket.populate('account')
    await ticket.populate('event')
    // logger.log('--service', accountId, eventData.eventId)
    return ticket
  }

  async removeTicket(ticketId, accountId) {
    const original = await dbContext.Tickets.findById(ticketId)
    if(original.accountId != accountId) {
      throw new BadRequest('not your record fool')
    }

    const event = await eventsService.getById(original.eventId)
    event.capacity += 1
    await event.save();

    await original.remove();
    return 'die'
  }
  
}

export const ticketsService = new TicketsService()