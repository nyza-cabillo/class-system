<!-- Import external CSS -->
<style src="./LoginView.css"></style>

<template>
  <div class="login-background">
    <div class="login-container">
      <form @submit.prevent="handleLogin">
        <h1>Cocoa Pod Disease Classification</h1>
        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <!-- Role -->
        <div class="form-group">
          <label for="role">Role</label>
          <input
            type="text"
            id="role"
            v-model="role"
            placeholder="Student/Researcher/Farmer"
            required
          />
        </div>

        <div class="form-group">
          <button type="submit">Login</button>
        </div>
        <p class="register-link">
          Don't have an account? <router-link to="/register">Create an Account</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      role: '', // Make sure this is defined correctly
    }
  },
  methods: {
    handleLogin() {
      // Perform login logic
      console.log('Logging in with:', {
        email: this.email,
        password: this.password,
        role: this.role,
      })
    },
  },
}
</script>
