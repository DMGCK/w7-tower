<template lang="">
  <div>
    <img :src="creator.account.picture" :title="creator.account.name" alt="Account picture" />
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