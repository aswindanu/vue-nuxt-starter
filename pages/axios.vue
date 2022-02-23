<template>
  <div>
    <h1>This will be load Axios</h1>

    <v-btn color="primary" @click.prevent="checkstate">Check Value</v-btn>
    <h1>{{ test1 }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test1: ''
    }
  },
  created() {
    const self = this
    const req = {
      url: '/users',
      method: 'post',
      data: {
        name: 'Favian',
        job: 'servant'
      }
    }
    this.$axios(req)
      .then(function(response) {
        console.log(response.data)
        self.test1 = response.data
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    checkstate() {
      console.log(this.test1)
    }
  }
}
</script>
