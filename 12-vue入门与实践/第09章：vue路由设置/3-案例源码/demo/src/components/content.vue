<template>
  <div>
      <h1>{{content?content.title:""}}</h1>
      <p>{{content?content.content:""}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
      return {
          content:null
      }
  },
  mounted(){
      axios.get("/apis/getcontent",{params:this.$route.query}).then((res)=>{
          this.content = res.data
      })
  }
}
</script>

