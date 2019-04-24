<template>
  <form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="name">Name</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </p>
   <p>
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      type="text"
      name="email"
    >
  </p>
  <p>
    <label for="age">Age</label>
    <input
      id="age"
      v-model="age"
      type="number"
      name="age"
      min="0"
    >
  </p>

  <p>
    <label for="hobbies">Hobbies</label>
    <select
      id="hobby"
      v-model="hobby"
      name="hobby"
    >
      <option>Dancing</option>
      <option>Singing</option>
      <option>Playing</option>
    </select>
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</template>
<script>
export default {
  data () {
    return {
      errors: [],
      name: null,
      age: null,
      hobby: null,
      email: null
    }
  },
  methods:{
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.age) {
        this.errors.push('Age required.');
      }
      if(!this.email) {
          this.errors.push('Email required');
      }

      e.preventDefault();
    }
  }
}
</script>

