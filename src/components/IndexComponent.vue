<template>
    <div>
      <router-link to = "/login">Login</router-link>
      <router-link to = "/register">Register</router-link>
      <!-- <button v-on:click="msg">click</button> -->
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      login: '/login',
      register: '/register'
    }
  },
  methods: {
    msg () {
      alert('clicked')
    }
  }
}
</script>
