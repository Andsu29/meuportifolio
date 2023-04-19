<template>
  <div>
    <div v-if="loading">
      <loading-view />
    </div>

    <div v-else class="container html">
      <div class="projeto-card">
        <div class="img">
          <img src="../assets/imgProjetos/animais.png" alt="animais" />
        </div>
        <div class="conteudo">
          <h1 class="titulo">Animais Fantásticos</h1>
          <p class="descricao">
            Projeto concluído no curso de JavaScript da Origamid, todo
            codificado do zero, responsivo, com animações no scroll, modal, API
            puxando dados externos como valor de bitcoin em real e um slide
            tambem codificado do zero unificando a este projeto. Utilizando
            ferramentas como Visual Studio Code, Node.js, Npm e Git.
          </p>
          <div class="div-btn">
            <button class="btn"><p class="gradiente">Ver Projeto</p></button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div class="img">
          <img src="../assets/imgProjetos/bikcraft.png" alt="animais" />
        </div>
        <div class="conteudo">
          <h1 class="titulo">Bikcraft</h1>
          <p class="descricao">
            O projeto Bikcraft foi criado no curso da Origamid onde trabalhei no
            desenvolvimento completo do HTML, CSS e JavaScript do Site.
          </p>
          <div class="div-btn">
            <button class="btn"><p class="gradiente">Ver Projeto</p></button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div class="img">
          <img src="../assets/imgProjetos/conversor.png" alt="animais" />
        </div>
        <div class="conteudo">
          <h1 class="titulo">Conversor de Moedas</h1>
          <p class="descricao">
            Neste projeto quis testar minhas habilidades com API em JavaScript,
            utilizando o fetch, um projeto simples onde codifiquei menos e
            pensei mais.
          </p>
          <div class="div-btn">
            <button class="btn"><p class="gradiente">Ver Projeto</p></button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div class="img">
          <img src="../assets/imgProjetos/rocketPay.png" alt="animais" />
        </div>
        <div class="conteudo">
          <h1 class="titulo">Rocketpay</h1>
          <p class="descricao">
            Neste projeto participei de um evento da Rocketseat onde criamos um
            cadastro de cartão de crédito muito interativo com JavaScript
            utilizando ferramentas como Imask,npm e Regex.
          </p>
          <div class="div-btn">
            <button class="btn"><p class="gradiente">Ver Projeto</p></button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div class="img">
          <img src="../assets/imgProjetos/caravan.png" alt="animais" />
        </div>
        <div class="conteudo">
          <h1 class="titulo">Caravan</h1>
          <p class="descricao">
            O projeto Caravan simula um site de viagens e nele utilizei o
            Framework Bootstrap concluindo um site totalmente responsivo e
            interativo.
          </p>
          <div class="div-btn">
            <button class="btn"><p class="gradiente">Ver Projeto</p></button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div class="img">
          <img src="../assets/imgProjetos/listaTarefa.png" alt="animais" />
        </div>
        <div class="conteudo">
          <h1 class="titulo">Lista de Tarefas</h1>
          <p class="descricao">
            Para praticar melhor a lógica de programação criei esta lista de
            tarefas com JavaScript, na lista você pode adicionar, remover e
            salvar as suas tarefas.
          </p>
          <div class="div-btn">
            <button class="btn"><p class="gradiente">Ver Projeto</p></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    loadingTime() {
      setTimeout(() => {
        this.loading = false;
      }, 4500);
    },
  },
  created() {
    this.loadingTime();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
h1 {
  color: #f9f9f9;
}
img {
  display: block;
  width: 350px;
  height: 400px;
  margin: 20px auto;
  border-radius: 20px;
  object-fit: cover;
}

.container {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 100px;
}
.projeto-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 450px;
  width: 900px;
  background: linear-gradient(rgba(35, 37, 49, 0.5), rgba(15, 15, 24, 0.5));
  border: 0.2rem solid rgb(32, 34, 46);
  border-radius: 60px;
}
.conteudo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  box-sizing: border-box;
}
.btn {
  padding: 10px 30px;
  font-size: 17px;
  border: 1px solid #f9f9f9;
  background-color: #10101a;
  border-radius: 5px;
}
.btn:hover {
  background-color: #2d2d3d;
}
.descricao {
  font-size: 18px;
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
.html {
  animation: ht 3s;
}
@keyframes ht {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
