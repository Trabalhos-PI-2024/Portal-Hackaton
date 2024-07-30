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
        <RouterLink to="/larissa"><p>Larissa</p></RouterLink>
        <RouterLink to="/murilo"><p>Murilo</p></RouterLink>
        </div>
      </header>
      <div class="mainPrincipal">
        <div class="redesSociais">
          <a href="https://github.com/MuriloDaCruz"> <ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/murilo-da-cruz-souza-439809299/"
            ><ion-icon name="logo-linkedin"></ion-icon
          ></a>
          <a href="https://www.instagram.com/souzamurilo.7/"><ion-icon name="logo-instagram"></ion-icon></a>
        </div>
        <div class="info">
          <p>murilocruzsouza99@gmail.com</p>
          <h1>Murilo da Cruz Souza</h1>
          <p>16 anos</p>
          <p>Instituto Federal Catarinense: Técnico em Informática</p>
          <p>Joinville - Santa Catarina</p>
        </div>
        <article class="article">
          <div class="imagem">
            <img src="../assets/img/murilo.jpeg" alt="Imagem Aqui" />
          </div>
        </article>
      </div>
    </main>
  </template>