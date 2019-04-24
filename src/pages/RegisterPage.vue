<template>
    <div>
       Username:<input v-model="username" placeholder="Enter username here">
       Password:<input v-model="password" placeholder="Enter password here">
       Email:<input v-model="email" placeholder="Enter email here">
       <button v-on:click="register">Register</button>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    register () {
      var users = []
      users.push({'username': this.username, 'password': this.password, 'email': this.email})
      localStorage.setItem('users', JSON.stringify(users))
      alert('clicked')
    }
  }
}
</script>
