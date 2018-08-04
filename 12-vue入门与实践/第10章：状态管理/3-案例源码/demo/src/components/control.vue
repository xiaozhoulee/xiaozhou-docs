<template>
  <div>
      <button @click="sub">-</button>
      <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  methods:{
      add(){
          console.log(this);
          this.$store.commit("add");
      },
      sub(){
          this.$store.commit("sub");
      }
  }
}
</script>
