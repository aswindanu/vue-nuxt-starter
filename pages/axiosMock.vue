<template>
  <div>
    <v-btn color="primary" @click.prevent="useMock1">Use Mock 1</v-btn>
    <v-btn color="primary" @click.prevent="useMock2">Use Mock 2</v-btn>
    <v-btn color="primary" @click.prevent="notUseMock">Not Use Mock</v-btn>
  </div>
</template>

<script>
import MockAdapter from 'axios-mock-adapter'

export default {
  methods: {
    useMock1() {
      const mock = new MockAdapter(this.$axios)

      mock.onGet('/users').reply(200, {
        users: [{ id: 1, name: 'John Smith' }]
      })

      this.$axios
        .get('/users')
        .then(function(response) {
          console.log(response.data)
          mock.restore()
        })
        .catch(function(error) {
          console.log(error)
          mock.restore()
        })
    },
    useMock2() {
      const mock = new MockAdapter(this.$axios)

      mock
        .onGet('/vian', {
          params: {
            searchText: 'John'
          },
          data: {
            test: 'test'
          }
        })
        .reply(200, {
          users: [{ id: 1, name: 'Favian' }]
        })

      const req = {
        url: '/vian',
        method: 'get',
        params: {
          searchText: 'John'
        }
      }
      this.$axios(req)
        .then(function(response) {
          console.log(response.data)
          mock.restore()
        })
        .catch(function(error) {
          console.log(error)
          mock.restore()
        })
    },
    notUseMock() {
      const self = this
      const req = {
        url: '/vian',
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
    }
  }
}
</script>
