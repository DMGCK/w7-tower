import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService";
import { eventsService } from "../services/EventsService";
import { ticketsService } from "../services/TicketsService";
import BaseController from "../utils/BaseController";




export class EventsController extends BaseController {
  constructor() {
    super('api/events')
    this.router
    .get('', this.getAll)
    .get('/:id', this.getById)
    .get('/:id/tickets', this.getTicketsByEvent)
    .get('/:id/comments', this.getCommentsByEvent)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createEvent)
    .put('/:id', this.editEvent)
    .delete('/:id', this.cancelEvent)
  }


  async getAll(req, res, next) {
    try {
      const events = await eventsService.getAll(req.query)
      return res.send(events)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      const event = await eventsService.getById(req.params.id)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }
  async getTicketsByEvent(req, res, next) {
    try {
      const tickets = await ticketsService.getTicketsByEvent(req.params.id)
      return res.send(tickets)
    } catch (error) {
      next(error)
    }
  }

  async getCommentsByEvent(req, res, next) {
    try {
      const comments = await commentsService.getCommentsByEvent(req.params.id)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }
  async createEvent(req, res, next) {
    try {
      const event = await eventsService.createEvent(req.body, req.userInfo.id)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }
  async editEvent(req, res, next) {
    try {
      const event = await eventsService.editEvent(req.body, req.params.id, req.userInfo.id)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }
  async cancelEvent(req, res, next) {
    try {
      await eventsService.cancelEvent(req.params.id, req.userInfo.id)
      return res.send('-deleted your record-')
    } catch (error) {
      
    }
  }
}