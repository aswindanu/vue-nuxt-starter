<template>
  <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-btn large color="primary" @click="GetData1">Call Store Data 1</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary" @click="GetData2">Call Store Data 2</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary" @click="GetData3">Call Store Data 3</v-btn>
      </div>
      <div class="my-2">
        <v-btn large color="primary" @click="GetData4">Call Store Data 4</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    GetData1() {
      this.$store.dispatch('setData1', 'Coba Set Data 1')
      console.log(this.$store.getters.getData1)
    },
    GetData2() {
      this.$store.dispatch('setData2', 'Coba Set Data 2')
      console.log(this.$store.getters.getData2)
    },
    GetData3() {
      this.$store.dispatch('setData3', 'Coba Set Data 3')
      console.log(this.$store.getters.getData3)
    },
    GetData4() {
      this.$store.dispatch('setData4', 'Coba Set Data 4')
      console.log(this.$store.getters.getData4)
    }
  }
}
</script>
