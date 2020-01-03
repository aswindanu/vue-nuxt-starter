<template>
  <div>This will be load AsyncData</div>
</template>

<script>
export default {
  asyncData(context) {
    console.log('This is Asynchronus Data Wich render in server')
  }
}
</script>
