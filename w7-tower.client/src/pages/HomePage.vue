<template>

<div class="row my-3">
  <h1>Events and stuff</h1>
  <h4>Filter By
    <span @click="eventFilter = ''" class="bg-white selectable mx-2 border border-secondary p-1">All</span>
    <span @click="eventFilter = 'concert'" class="bg-white selectable mx-2 border border-secondary p-1">Concert</span>
    <span @click="eventFilter = 'convention'" class="bg-white selectable mx-2 border border-secondary p-1">Convention</span>
    <span @click="eventFilter = 'sport'" class="bg-white selectable mx-2 border border-secondary p-1">Sport</span>
    <span @click="eventFilter = 'digital'" class="bg-white selectable mx-2 border border-secondary p-1">Digital</span>
  </h4>

</div>

<div class="row">
  <Event v-for="e in events" :key="e.id" :event="e"/>

</div>

</template>

<script>
import { computed, onMounted, ref } from "vue"
import { AppState } from "../AppState"
import { eventsService} from '../services/EventsService'

export default {
  name: 'Home',
  setup() {
    const eventFilter = ref('')
    onMounted(async()=> {
     try {
       await eventsService.getAll()
     } catch (error) {
     Pop.toast(error, 'error')
     console.error(error);
     }
    })

    return {
      eventFilter,
      events: computed(()=> AppState.events.filter(x => eventFilter.value ? x.type == eventFilter.value : true))
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
