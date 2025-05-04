<template>
  <div class="register-container">
    <form class="register-form" @submit.prevent="handleSubmit">
      <h1>Cocoa Pod Disease Classification</h1>
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          v-model="firstName"
          class="form-input"
          placeholder="Enter first name"
          required
        />
      </div>

      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          v-model="lastName"
          class="form-input"
          placeholder="Enter last name"
          required
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="form-input"
          placeholder="Enter email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-input"
          placeholder="Enter password"
          required
        />
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          v-model="confirmPassword"
          class="form-input"
          placeholder="Confirm password"
          required
        />
      </div>
      <div class="form-group">
        <button type="submit" class="register-button">Register</button>
      </div>
      <p class="login-link">
        Already have an account? <router-link to="/login">Login here</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    handleSubmit() {
      // Form validation
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match!')
        return
      }

      // Log or handle user registration
      console.log('User registered:', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      })

      // Reset form
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.password = ''
      this.confirmPassword = ''

      // Navigate to login
      this.$router.push('/login')
    },
  },
}
</script>

<style src="./RegisterView.css"></style>
