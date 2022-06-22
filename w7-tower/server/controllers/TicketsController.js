import { Auth0Provider } from "@bcwdev/auth0provider";
import { ticketsService } from "../services/TicketsService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger";



export class TicketsController extends BaseController {
  constructor() {
    super('api/tickets')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.create)
    .delete('/:id', this.remove)
  }
  async create(req, res, next) {
    try {
      const ticket = await ticketsService.createTicket(req.userInfo.id, req.body)
      logger.log('-controller-', ticket)
      return res.send(ticket)
    } catch (error) {
      next(error)
    }
  }
  async remove(req, res, next) {
    try {
      await ticketsService.removeTicket(req.params.id, req.userInfo.id)
      return res.send('deleted this freakin record')
    } catch (error) {
      next(error)
    }
  }
}