<template>
  <div>
    <span class="login100-form-title p-b-41">Ingresar</span>
    <form @submit.prevent="onSubmit" class="login100-form validate-form p-b-33 p-t-5">
      <div class="wrap-input100 validate-input" data-validate="Enter username">
        <input v-model="userForm.email" class="input100" type="text" placeholder="Correo" required />
        <span class="focus-input100" data-placeholder="&#xe82a;"></span>
      </div>

      <div class="wrap-input100 validate-input" data-validate="Enter password">
        <input
          v-model="userForm.password"
          class="input100"
          type="password"
          placeholder="Contraseña"
          required
        />
        <span class="focus-input100" data-placeholder="&#xe80f;"></span>
      </div>

      <div class="container-login100-form-btn m-t-32">
        <button type="submit" class="login100-form-btn">Login</button>
      </div>

      <div class="container-login100-form-btn m-t-32">
        <router-link :to="{name: 'register'}">¿No tienes cuenta?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useAuth from "../composables/useAuth";
import { useRouter } from "vue-router";

import Swal from "sweetalert2";
export default {
  name: "Login",
  setup() {
    const { loginUser } = useAuth();
    const router = useRouter();
    const userForm = ref({
      email: "",
      password: ""
    });
    return {
      userForm,
      onSubmit: async () => {
        const { ok, message } = await loginUser(userForm.value);
        let errorMessageAlert = "";
        if (message === "INVALID_PASSWORD") {
          errorMessageAlert = "La contraseña no es correcta.";
        } else {
          errorMessageAlert = "Email no encontrado.";
        }
        if (!ok) Swal.fire("Error", errorMessageAlert, "error");
        else router.push({ name: "no-entry" });
      }
    };
  }
};
</script>

