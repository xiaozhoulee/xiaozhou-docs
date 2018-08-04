<template>
  <h1>{{number}}</h1>
</template>

<script>
export default {
  computed:{
      number(){
          return this.$store.state.number;
      }
  }
}
</script>
