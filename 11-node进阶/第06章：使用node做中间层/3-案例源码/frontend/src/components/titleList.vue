<template>
  <div>
    <h1>文章列表</h1>
    <ul>
      <li v-for="item in list">
        
        <router-link :to='{path:"/content",query:{title:item}}'>{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      list:null
    }
  },
  mounted(){
    axios.get("/apis/gettitlelist").then((res)=>{
      this.list = res.data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
