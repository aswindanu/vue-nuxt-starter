<template>
  <div>
    <v-btn color="primary" @click.prevent="showUsernameEnv">Env Username</v-btn>
    <v-btn color="primary" @click.prevent="showPasswordEnv">Env Password</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    showUsernameEnv() {
      console.log(process.env.username)
    },
    showPasswordEnv() {
      console.log(process.env.password)
    }
  }
}
</script>
