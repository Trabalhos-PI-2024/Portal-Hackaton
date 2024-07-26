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
      <RouterLink to="/davi">Davi</RouterLink>
      <RouterLink to="/enzo">Enzo</RouterLink>
      <RouterLink to="/gabriel">Gabriel</RouterLink>
      <RouterLink to="/henrique">Henrique</RouterLink>
      <RouterLink to="/larrisa">Larissa</RouterLink>
      <RouterLink to="/murilo">Murilo</RouterLink>
      </div>
    </header>
    <div class="mainPrincipal">
      <div class="redesSociais">
        <a href="https://github.com/henriquechepli"> <ion-icon name="logo-github"></ion-icon></a>
        <a href="https://www.linkedin.com/in/henrique-de-morais-chepli-110906299/"
          ><ion-icon name="logo-linkedin"></ion-icon
        ></a>
        <a href="https://www.instagram.com/hchepli/"><ion-icon name="logo-instagram"></ion-icon></a>
      </div>
      <div class="info">
        <p>henriquemchepli@gmail.com</p>
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
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 0 100px;
  background: #161660;
  color: #fff;
}

.main .header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    position: fixed;
    top: 0;
}

.main .header .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.main .mainPrincipal {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.main .redesSociais {
  position: fixed;
  left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}

.main .redesSociais a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #0d0d0d;
  border-radius: 100%;
  transition: all 0.5s ease;
}

.main .redesSociais a:hover {
  transform: scale(1.1);
  background: #ecec53;
}

.main .redesSociais a:hover ion-icon {
  color: #161660;
}

.main .redesSociais a ion-icon {
  color: #fff;
  font-size: 20px;
  transition: all 0.5s ease;
}

.main .info {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
}

.main .info h1 {
  font-size: 60px;
  border-bottom: 1.5px solid #ecec53;
  padding: 0 0 10px 0;
  margin: 0 0 10px 0;
  font-weight: 900;
  letter-spacing: 1px;
}

.main .info p {
  font-size: 20px;
  letter-spacing: 1.5px;
}

.main .article {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

