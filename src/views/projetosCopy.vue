<template>
  <div>
    <div v-if="loading">
      <loading-view />
    </div>

    <div v-else class="container html">
      <div class="projeto-card">
        <div class="img">
          <a
            href="https://andsu29.github.io/conversor-de-moedas/"
            target="_blank"
          >
            <img src="../assets/imgProjetos/conversor.png" alt="conversor" />
          </a>
        </div>
        <div class="conteudo">
          <h1 class="titulo">Conversor de Moedas</h1>
          <p class="descricao">
            Neste projeto quis testar minhas habilidades com API em JavaScript,
            utilizando o fetch, um projeto simples onde codifiquei menos e
            pensei mais.
          </p>
          <div class="div-btn">
            <button class="btn">
              <p class="gradiente">
                <a
                  href="https://andsu29.github.io/conversor-de-moedas/"
                  target="_blank"
                  >Ver Projeto</a
                >
              </p>
            </button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div class="img">
          <a href="https://lista-de-tarefa-lime.vercel.app/" target="_blank">
            <img
              src="../assets/imgProjetos/listaTarefa.png"
              alt="listaTarefa"
            />
          </a>
        </div>
        <div class="conteudo">
          <h1 class="titulo">Lista de Tarefas</h1>
          <p class="descricao">
            Para praticar melhor a lógica de programação criei esta lista de
            tarefas com JavaScript, na lista você pode adicionar, remover e
            salvar as suas tarefas.
          </p>
          <div class="div-btn">
            <button class="btn">
              <p class="gradiente">
                <a
                  href="https://lista-de-tarefa-lime.vercel.app/"
                  target="_blank"
                  >Ver Projeto</a
                >
              </p>
            </button>
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
      });
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
  text-align: center;
}
img {
  display: block;
  width: 350px;
  height: 400px;
  margin: 20px auto;
  border-radius: 20px;
  object-fit: cover;
}
.img:hover {
  opacity: 60%;
}
.container {
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  padding: 100px;
}
.projeto-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
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
  flex: 1;
  box-sizing: border-box;
}
.div-btn {
  display: flex;
  justify-content: center;
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
  display: flex;
  flex: 1;
  align-items: center;
  padding: 20px 0px;
  text-align: center;
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
@media (max-width: 1000px) {
  .projeto-card {
    height: 450px;
    width: 800px;
  }
  .conteudo {
    padding: 30px;
  }
  img {
    width: 300px;
    height: 400px;
  }
}
@media (max-width: 850px) {
  .projeto-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 450px;
    width: 700px;
  }
  .conteudo {
    padding: 20px;
  }
  .titulo {
    text-align: center;
  }
  .descricao {
    text-align: center;
  }
  .div-btn {
    margin: 0 auto;
  }
  img {
    width: 270px;
    height: 400px;
  }
}
@media (max-width: 720px) {
  .projeto-card {
    height: 450px;
    width: 600px;
  }
  .conteudo {
    padding: 20px;
  }
  .titulo {
    text-align: center;
    font-size: 30px;
  }
  .descricao {
    text-align: center;
    font-size: 16px;
  }
  .div-btn {
    margin: 0 auto;
  }
  img {
    width: 240px;
    height: 400px;
  }
}
@media (max-width: 620px) {
  .projeto-card {
    height: 400px;
    width: 500px;
  }
  .conteudo {
    padding: 20px;
  }
  .titulo {
    text-align: center;
    font-size: 30px;
  }
  .descricao {
    text-align: center;
    font-size: 16px;
  }
  .div-btn {
    margin: 0 auto;
  }
  img {
    width: 200px;
    height: 350px;
  }
}
@media (max-width: 520px) {
  .projeto-card {
    height: 300px;
    width: 400px;
    border-radius: 30px;
  }
  .conteudo {
    padding: 15px;
  }
  .titulo {
    text-align: center;
    font-size: 20px;
  }
  .descricao {
    text-align: center;
    font-size: 12px;
  }
  .div-btn {
    margin: 0 auto;
  }
  .btn {
    font-size: 12px;
  }
  img {
    width: 150px;
    height: 250px;
  }
}
@media (max-width: 400px) {
  .projeto-card {
    height: 300px;
    width: 350px;
    border-radius: 30px;
  }
  .conteudo {
    padding: 15px;
  }
  .titulo {
    text-align: center;
    font-size: 20px;
  }
  .descricao {
    text-align: center;
    font-size: 12px;
  }
  .div-btn {
    margin: 0 auto;
  }
  .btn {
    font-size: 12px;
  }
  img {
    width: 150px;
    height: 250px;
  }
  .container {
    gap: 50px;
    padding: 50px;
  }
}
</style>
