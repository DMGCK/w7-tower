<template lang="">
  <div class="elevation-2 border border-secondary my-2">
    <Creator :creator="comment.creator"/>
    {{comment.body}}

    <div @click="removeComment" v-if="account.id == comment.creatorId" class="btn btn-danger"> Remove Comment</div>
  </div>
</template>
<script>
import { computed } from "vue"
import { AppState } from "../AppState"
import { commentsService } from "../services/CommentsService"
import Pop from "../utils/Pop"

export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  setup(props) {


    return {
      account: computed(()=> AppState.account),

      async removeComment() {
        // console.log('--comment',props.comment.id)
        try {
          await commentsService.removeComment(props.comment.id)
          Pop.toast('Deleted Comment')
        } catch (error) {
          console.error(error)
          Pop.toast(error, 'error')
        }
      }
    }
  }
  
}
</script>
<style lang="">
  
</style>