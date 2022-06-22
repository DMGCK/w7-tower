import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"


class CommentsService {

  async getCommentsByEvent(eventId) {
    const comments = await dbContext.Comments.find({eventId}).populate('creator')
    return comments
  }
  async createComment(commentData, accountId) {
    commentData.creatorId = accountId
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('creator')
    return comment

  }
  async removeComment(commentId, creatorId) {
    const original = await dbContext.Comments.findById(commentId)
    if (original.creatorId != creatorId) {
      throw new Forbidden('Exile Target Identity Thief')
    }
    original.remove()
    return 'exiled'
  }

}

export const commentsService = new CommentsService()