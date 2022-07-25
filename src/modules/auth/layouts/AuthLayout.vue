<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100 p-t-30 p-b-50">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout"
};
</script>

<style lang="scss" scoped>
@import "../css/auth.css";
@import "../css/util.css";
.container-login100 {
  background-image: url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
}
</style>