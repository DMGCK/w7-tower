<template lang="">
  <div class="row">
    <div class="col-12">
      <h1>{{event.name}}</h1>
      <p>Type: {{event.type}}</p>
      <p>{{new Date(event.startDate).toLocaleDateString()}}</p>

      <Creator :creator="event.creator"/>

      <p>{{event.description}}</p>

      <div @click="cancelEvent" v-if="account.id == event.creatorId && event.isCanceled != true" class="btn btn-danger">Cancel this event</div>
      <div @click="attendEvent" v-if="!event.isCanceled && event.capacity != 0 && !isAttending" class="btn btn-warning m-1 border border-secondary">Attend this event</div>

      <p v-if="event.isCanceled"> This Event is Cancelled</p>

      <p>Capacity: {{event.capacity}}</p>
      <p>Location: {{event.location}}</p>
      <img :src="event.coverImg" alt="Event CoverImage" class="img-fluid"/>
      <h2>Who's Going</h2>

      <Attendee v-for="t in tickets" :key="t.id" :creator="t" />


      <div>
        <p>Add a comment</p>
        <form @submit.prevent="postComment">
        
        <div class="mb-3">
          <input type="text" v-model="comment.body" class="form-control" name="commentForm" id="commentForm" aria-describedby="helpId" placeholder="Comment text here">
        </div>
        
        </form>
      </div>

      <Comment v-for="c in comments" :key="c.id" :comment="c" />
    </div>
  </div>
</template>
<script>
import { computed, ref, watchEffect } from "vue"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import { eventsService } from "../services/EventsService"
import { commentsService } from '../services/CommentsService'
import Pop from "../utils/Pop"

export default {

  setup() {
    const route = useRoute()
    const comment = ref({ eventId: `${route.params.id}`})
    watchEffect(async () => {
     try {
       await eventsService.getOne(route.params.id)
       await eventsService.getTicketsByEvent(route.params.id)
       await eventsService.getCommentsByEvent(route.params.id)
     } catch (error) {
     Pop.toast(error, 'error')
     console.error(error);
     }
    });

    return {
      comment,
      event: computed(()=> AppState.activeEvent),
      tickets: computed(()=> AppState.activeTickets),
      comments: computed(() => AppState.comments),
      account: computed(() => AppState.account),
      isAttending: computed(() => {
        const userTicket = AppState.activeTickets.find(x => x.accountId == AppState.account.id)
        if (!userTicket?.id) {
          return false
        }
        return true
      }),
      


      async postComment() {
        console.log(comment.value.body, '-commenting-')
        try {
          await commentsService.postComment(comment.value)
        } catch (error) {
          Pop.toast(error, 'error')
          console.error(error);
        }
      },

      async cancelEvent() {
       try {
         await eventsService.cancelEvent(route.params.id) 
         Pop.toast('Event Cancelled')
       } catch (error) {
       Pop.toast(error, 'error')
       console.error(error);
       }
      },

      async attendEvent() {
       try {
         await eventsService.attendEvent(route.params.id, AppState.account.id)
       } catch (error) {
       Pop.toast(error, 'error')
       console.error(error);
       }
      }
    }
  }
  
}
</script>
<style lang="">
  
</style>