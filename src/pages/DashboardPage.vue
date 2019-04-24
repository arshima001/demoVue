<template>
    <div>
       <p>Welcome to the Dashboard!!</p>
       <button v-on:click="logout">Logout</button>
    </div>
</template>
<script>
export default {
  methods: {
    logout () {
      sessionStorage.clear()
      this.$router.push({path: '/login'})
    }
  }
}
</script>

