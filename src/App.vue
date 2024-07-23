<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/davi">Davi</RouterLink>
      </nav>
 

  <RouterView />
</template>

<style scoped>

</style>
