<template lang="">
  <div>
    <img :src="creator.picture" alt="Creator Picture"/>
    <p>{{creator.name}}</p>
  </div>
</template>
<script>
export default {
  props: {
    creator: {
      type: Object,
      required: true
    }
  }
  
}
</script>
<style lang="">
  
</style>