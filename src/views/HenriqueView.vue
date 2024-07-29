<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="main">
    <header class="header">
        <div class="title">
            <router-link to="/"><h1>Portal Hackaton</h1></router-link>
        </div>
     <div class="nav">
      <RouterLink to="/davi"><p>Davi</p></RouterLink>
      <RouterLink to="/enzo"><p>Enzo</p></RouterLink>
      <RouterLink to="/gabriel"><p>Gabriel</p></RouterLink>
      <RouterLink to="/henrique"><p>Henrique</p></RouterLink>
      <RouterLink to="/larrisa"><p>Larissa</p></RouterLink>
      <RouterLink to="/murilo"><p>Murilo</p></RouterLink>
      </div>
    </header>
    <div class="mainPrincipal">
      <div class="redesSociais">
        <a href="https://github.com/henriquechepli"> <ion-icon name="logo-github"></ion-icon></a>
        <a href="https://www.linkedin.com/in/henrique-chepli-110906299/"
          ><ion-icon name="logo-linkedin"></ion-icon
        ></a>
        <a href="https://www.instagram.com/hchepli/"><ion-icon name="logo-instagram"></ion-icon></a>
      </div>
      <div class="info">
        <p>henriquechepli@gmail.com</p>
        <h1>Henrique Chepli</h1>
        <p>16 anos</p>
        <p>Instituto Federal Catarinense: Técnico em Informática</p>
        <p>Joinville - Santa Catarina</p>
      </div>
      <article class="article">
        <div class="imagem">
          <img src="" alt="Imagem Aqui" />
        </div>
      </article>
    </div>
  </main>
</template>
<style scoped>
</style>

