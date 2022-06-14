<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola Mundo</h1>
    <button @click="goToDayBook" class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    goToDayBook(){
      this.$router.push({name: 'no-entry'})
    }
  }
};
</script>
