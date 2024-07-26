<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/larissa">About</RouterLink>
      </nav>
 

  <RouterView />
</template>

<style scoped>

</style>
