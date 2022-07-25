<template>
  <nav class="navbar bg-primary">
    <a href="#" class="navbar-brand text-white">
      <img src="@/assets/logo.png" alt="Vue Logo" class="d-inline-block align-text-top mx-2" height="24" />
      {{userName}}
    </a>
    <div class="d-flex">
       <button class="btn btn-outline-info mx-2" @click="onLogout">
           <i class="fa fa-sign-out-alt"></i>
       </button>
    </div>
  </nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth';
import { useRouter } from 'vue-router';
export default {
  name: "Navbar",
  setup(){
    const router = useRouter();
    const {userName, logOut} = useAuth();
    return {userName, onLogout: () => {
      router.push({name: 'login'})
      logOut();
    }}
  }
};
</script>

<style>
</style>