<template>
  <div class="home">
    <redes-view class="contatoView" />
    <div class="conteudo">
      <p>Olá, eu sou</p>
      <h1 class="gradiente">Anderson Duarte</h1>
      <h2>
        Desenvolvedor <br />
        <span class="gradiente">Front End -</span>
        Vue 2, <br />
        HTML, CSS e JavaScript
      </h2>
    </div>
    <!--
    <div class="div-img">
      <img
        class="perfil"
        src="..\src\assets\perfil\tinywow_profile_photo_19972869.png"
        alt="perfil"
      />
    </div>
    -->
    <redes-view class="contato-none" />
  </div>
</template>
<script>
import redesView from "./contatoView.vue";
export default {
  name: "HomeView",
  components: {
    redesView,
  },
};
</script>

<style scoped>
.home {
  justify-content: space-around;
  margin: 50px auto;
  font-size: 2rem;
  display: flex;
  overflow: hidden;
}
.conteudo {
  animation: midias 4s;
  padding-top: 50px;
}
.gradiente {
  background: -webkit-linear-gradient(
    135deg,
    #6bc5f8,
    #cf59e6,
    #6bc5f8,
    #cf59e6
  );
  background: linear-gradient(-45deg, #6bc5f8, #cf59e6, #6bc5f8, #cf59e6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  -webkit-animation: gradient 3s ease infinite;
  animation: gradient 8s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
.perfil {
  box-sizing: border-box;
  margin-left: 40px;
  opacity: 80%;
  height: 500px;
}

.contato-none {
  display: none;
}
@keyframes midias {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 1220px) {
  .conteudo {
    padding-left: 30px;
  }
  .perfil {
    height: 350px;
    padding-right: 20px;
  }
}
@media (max-width: 1070px) {
  .conteudo {
    padding-left: 30px;
  }
  .perfil {
    height: 250px;
    padding-right: 100px;
  }
}
@media (max-width: 850px) {
  .conteudo {
    padding: 20px 0px 0px 0px;
    margin: 0 auto;
    text-align: center;
  }
  .home {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    margin: 0;
    font-size: 1.5rem;
  }
  .perfil {
    padding-top: 50px;
    padding-left: 110px;
    margin: 0 auto;
  }
  .contato-none {
    display: block;
  }
  .contatoView {
    display: none;
  }
}
@media (max-width: 600px) {
  .conteudo {
    font-size: 1.5rem;
  }
}
@media (max-width: 440px) {
  .conteudo {
    font-size: 1rem;
  }
  @media (max-width: 440px) {
    .conteudo {
      padding: 0px;
      margin: 0 auto;
      text-align: center;
    }
    .home {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
