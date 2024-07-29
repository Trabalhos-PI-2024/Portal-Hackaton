<script setup>
</script>

<template>
    <main>
      <section class="indexMain">
        <div class="title">
          <h1>Portal Hackaton</h1>
        </div>
        <div class="button">
          <a href="#indexGroup"><button><ion-icon name="arrow-down-outline"></ion-icon></button></a>
        </div>
      </section>
      <section id="indexGroup">
        <div class="titleGroup">
          <h2>Membros</h2>
        </div>
        <div class="allCards">
          <div class="cardMember">
            <div class="imgMember"></div>
            <div class="infoMember">
              <h4>Davi de Morais Bisewski</h4>
            </div>
            <div class="buttonMember">
              <router-link to="/davi"><ion-icon name="enter-outline"></ion-icon></router-link>
            </div>
          </div>
          <div class="cardMember">
            <div class="imgMember"></div>
            <div class="infoMember">
              <h4>Enzo Girardi</h4>
            </div>
            <div class="buttonMember">
              <router-link to="/enzo"><ion-icon name="enter-outline"></ion-icon></router-link>
            </div>
          </div>
          <div class="cardMember">
            <div class="imgMember"></div>
            <div class="infoMember">
              <h4>Gabriel Henrick Martins Gomes</h4>
            </div>
            <div class="buttonMember">
              <router-link to="/gabriel"><ion-icon name="enter-outline"></ion-icon></router-link>
            </div>
          </div>
          <div class="cardMember">
            <div class="imgMember"></div>
            <div class="infoMember">
              <h4>Henrique Chepli</h4>
            </div>
            <div class="buttonMember">
              <router-link to="/henrique"><ion-icon name="enter-outline"></ion-icon></router-link>
            </div>
          </div>
          <div class="cardMember">
            <div class="imgMember"></div>
            <div class="infoMember">
              <h4>Larissa Lotin</h4>
            </div>
            <div class="buttonMember">
              <router-link to="/larissa"><ion-icon name="enter-outline"></ion-icon></router-link>
            </div>
          </div>
          <div class="cardMember">
            <div class="imgMember"></div>
            <div class="infoMember">
              <h4>Murilo da Cruz Souza</h4>
            </div>
            <div class="buttonMember">
              <router-link to="/murilo"><ion-icon name="enter-outline"></ion-icon></router-link>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

<style scoped>
main {
  background-color: #161660;
}
main .indexMain {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 75px;
  height: 100vh;
}

main .indexMain .title {
  font-size: 5vw;
  color: #fff   ;
}

main .indexMain .button button {
  padding: 15px 50px;
  border-radius: 10px;
  background: #ecec53;
  border: 1px solid #0d0d0d;
  transition: all 0.5s ease-in-out;
}

main .indexMain .button:hover button {
  transform: scale(1.1) translateY(-10px);
  border: 1px solid transparent;
}

main .indexMain .button button ion-icon {
  font-size: 15px;
}

main #indexGroup {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding-bottom: 50px;
}

main #indexGroup .titleGroup {
  font-size: 2vw;
  color: #fff;
  border-bottom: 2px solid #ecec53;
}

main #indexGroup .allCards {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding: 0 300px;
  flex-wrap: wrap;
}

main #indexGroup .cardMember {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 250px;
  height: 300px;
  background: #e7e7e7;
  border: 1px solid #ecec53;
  border-radius: 10px;
}

main #indexGroup .cardMember .buttonMember {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  border-radius: 50px;
  background: #ecec53;
  transition: all 0.5s ease-in-out;
  border: 1.5px solid #0d0d0d;
}

main #indexGroup .cardMember .buttonMember:hover {
  transform: translateY(-2.5px);
}

main #indexGroup .cardMember .buttonMember ion-icon {
  color: #0d0d0d;
}

</style>