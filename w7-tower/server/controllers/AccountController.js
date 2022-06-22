import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { ticketsService } from "../services/TicketsService"
import BaseController from '../utils/BaseController'
import { logger } from "../utils/Logger"

export class AccountController extends BaseController {
  constructor() {
    super('/account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/tickets', this.getUserTickets)
  }


  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  async getUserTickets(req, res, next) {
    logger.log('-getUserTickets-')
    try {
      const tickets = await ticketsService.getTicketsByUserId(req.userInfo.id)
      return res.send(tickets)
    } catch (error) {
      next(error)
    }
  }
}
