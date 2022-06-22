import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";


export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createComment)
    .delete('/:id', this.removeComment)

  }

  async createComment(req, res, next) {
    try {
      const comment = await commentsService.createComment(req.body, req.userInfo.id)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }
  async removeComment(req, res, next) {
    try {
      await commentsService.removeComment(req.params.id, req.userInfo.id)
      return res.send('Exiled target comment')
    } catch (error) {
      next(error)
    }
  }
}