<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="getdata">获取数据</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{ 
    getdata(){
      console.log("http");
      axios.get("/apis/getdata").then((res)=>{
        this.msg = res.data
      })
    }
  }
}
</script>

