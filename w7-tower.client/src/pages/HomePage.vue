<template>

<div class="row">
  <h1>Events and stuff</h1>

</div>

<div class="row">
  <Event v-for="e in events" :key="e.id" :event="e"/>

</div>

</template>

<script>
import { computed, onMounted } from "vue"
import { AppState } from "../AppState"
import { eventsService} from '../services/EventsService'

export default {
  name: 'Home',
  setup() {
    onMounted(async()=> {
     try {
       await eventsService.getAll()
     } catch (error) {
     Pop.toast(error, 'error')
     console.error(error);
     }
    })

    return {
      events: computed(()=> AppState.events)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
