<template>
    <div>
       Username:<input v-model="username" placeholder="Enter username here">
       Password:<input v-model="password" placeholder="Enter password here">
       <button v-on:click="login">Login</button>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      var users = JSON.parse(localStorage.getItem('users'))
      var flag = 0
      for (var i = 0; i < users.length; i++) {
        if (this.username === users[i]['username'] && this.password === users[i]['password']) {
          flag = 1
          break
        }
      }
      if (flag === 1) {
        alert('valid user')
      } else {
        alert('invalid user')
      }
    }
  }
}
</script>
