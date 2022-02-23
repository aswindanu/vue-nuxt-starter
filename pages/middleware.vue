<template>
  <v-layout>
    <v-flex class="text-center">
      <blockquote class="blockquote">
        &#8220;This is will run OnlyMiddlewarePage.js&#8221;
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: ['onlyMiddlewarePage']
}
</script>
