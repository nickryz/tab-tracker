<template>
  <div class="about">
    <h1>This is an register page</h1>
    <form action="">
      <label>
        <input type="text" name="email" placeholder="email" v-model="email" />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder="password"
          v-model="password"
        />
      </label>
    </form>
    <button @click="register">register</button>
  </div>
</template>

<script>
import AuthentificationService from "../services/AuthentificationService";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      await AuthentificationService.register({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
