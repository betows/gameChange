<template>
  <div>
    <h1>Loading...</h1>
  </div>
</template>

<script>
export default {
  async mounted () {
    await this.$auth.init()
    this.$router.push('/')
  }
}
</script>
