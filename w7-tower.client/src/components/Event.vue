<template lang="">
  <div class="col-3">
    <div  :class="event.isCanceled ? 'border border-danger' : ''">
      <div @click="getDetails" class="elevation-2 m-1 selectable">
        <h3 class="p-2">{{event.name}}</h3>
        <p v-if="!event.isCanceled">{{ new Date(event.startDate).toLocaleDateString()}}</p>
         <p v-if="event.isCanceled">This Event is Cancelled</p>
        <p>{{event.capacity}} Spots remaining</p>
        <p>{{event.location}}</p>
        <span class="text-center">
          <img :src="event.coverImg" alt="Event Cover Image" class="img-fluid rounded"/>
        </span>
      </div>
          <div v-if="route.name == 'About'  && event.id" @click="removeTicket" class="btn btn-danger">Remove Ticket</div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { AppState } from "../AppState"
import { eventsService } from "../services/EventsService"
import Pop from "../utils/Pop"


export default {
  props: {
    event: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    

    return {
      route,
      getDetails() {
        console.log(props.event.id)
        router.push({
          name: 'Event Details' ,
          params: {
            id: props.event.id
          }
        })
      },
      async removeTicket() {
        try {
          console.log(props.event.id)
          eventsService.removeTicket(props.event.id, AppState.account.id)
          Pop.toast('Deleted Ticket')
          eventsService.getEventsByAccount(AppState.account.id)
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