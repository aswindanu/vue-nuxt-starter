<template>
  <div class="my-2">
    <v-btn large color="primary" @click="setLocalStorage"
      >Set Local Storage</v-btn
    >
    <v-btn large color="success" @click="getLocalStorage"
      >Get Local Storage</v-btn
    >
    <v-btn large color="danger" @click="removeLocalStorage"
      >Delete Local Storage</v-btn
    >
  </div>
</template>

<script>
export default {
  methods: {
    setLocalStorage() {
      localStorage.setItem('counter', 'Ini Counter')
    },
    getLocalStorage() {
      const data = localStorage.getItem('counter')

      console.log(data)
    },
    removeLocalStorage() {
      localStorage.removeItem('counter')
    }
  }
}
</script>
