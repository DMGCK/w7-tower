<template lang="">
    <div class="col-3">
  <div>
      <div class="elevation-2 m-1">

        <h3 class="p-2">{{event.name}}</h3>
      <small></small>
      <img :src="event.coverImg" class="img-fluid rounded"/>
    </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
  
}
</script>
<style lang="">
  
</style>