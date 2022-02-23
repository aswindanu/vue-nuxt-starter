<template>
  <div>
    <form>
      <v-text-field id="email" v-model="email" label="email"></v-text-field>
      <v-text-field
        id="password"
        v-model="password"
        label="password"
      ></v-text-field>
      <v-text-field id="notes" v-model="notes" label="notes"></v-text-field>
      <div class="my-2">
        <v-btn color="primary" @click.prevent="onSubmitBor">On Submit</v-btn>
      </div>
    </form>
    <h1>Your Email: {{ email }}</h1>
    <h1>Your Password: {{ password }}</h1>
    <h1>Yoaur Notes: {{ notes }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      notes: ''
    }
  },
  methods: {
    onSubmitBor() {
      console.log(this.email)
      console.log(this.password)
      console.log(this.notes)
      this.$router.push('/')
    }
  }
}
</script>
