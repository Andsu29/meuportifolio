<template>
  <div>
    <div v-if="loading">
      <loading-view />
    </div>
    <div v-else class="container html">
      <div class="projeto-card">
        <div>
          <a href="https://technoecom.vercel.app/" target="_blank">
            <img
              class="img"
              src="../assets/imgProjetos/techno.png"
              alt="animais"
            />
          </a>
        </div>
        <div class="conteudo">
          <h1 class="titulo">Techno</h1>
          <p class="descricao">
            Um pequeno projeto concluído no curso de VueJS da Origamid, podendo
            adicionar e remover produtos ao carrinho com as informações salvas
            no LocalStorage, sem usar componentes com a intenção de mostrar um
            pouco do framework.
          </p>
          <div class="div-btn">
            <button class="btn">
              <p class="gradiente">
                <a href="https://technoecom.vercel.app/" target="_blank"
                  >Ver Projeto</a
                >
              </p>
            </button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div>
          <a
            href="https://andsu29.github.io/animais-fantasticos-slide/"
            target="_blank"
          >
            <img
              class="img"
              src="../assets/imgProjetos/animais.png"
              alt="animais"
            />
          </a>
        </div>
        <div class="conteudo">
          <h1 class="titulo">Animais Fantásticos</h1>
          <p class="descricao">
            Projeto concluído no curso de JavaScript da Origamid, todo
            codificado do zero, responsivo, com animações no scroll, modal, API
            puxando dados externos como valor de bitcoin em real e um slide
            tambem codificado do zero.
          </p>
          <div class="div-btn">
            <button class="btn">
              <p class="gradiente">
                <a
                  href="https://andsu29.github.io/animais-fantasticos-slide/"
                  target="_blank"
                  >Ver Projeto</a
                >
              </p>
            </button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div>
          <a href="https://projetbikcraft.netlify.app/" target="_blank">
            <img
              class="img"
              src="../assets/imgProjetos/bikcraft.png"
              alt="bikcraft"
            />
          </a>
        </div>
        <div class="conteudo">
          <h1 class="titulo">Bikcraft</h1>
          <p class="descricao">
            O projeto Bikcraft foi criado no curso da Origamid onde trabalhei no
            desenvolvimento completo do HTML, CSS e JavaScript do Site.
          </p>
          <div class="div-btn">
            <button class="btn">
              <p class="gradiente">
                <a href="https://projetbikcraft.netlify.app/" target="_blank">
                  Ver Projeto</a
                >
              </p>
            </button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div>
          <a href="https://explore-lab-omega.vercel.app/" target="_blank">
            <img
              class="img"
              src="../assets/imgProjetos/rocketPay.png"
              alt="rocketPay"
            />
          </a>
        </div>
        <div class="conteudo">
          <h1 class="titulo">Rocketpay</h1>
          <p class="descricao">
            Neste projeto participei de um evento da Rocketseat onde criamos um
            cadastro de cartão de crédito muito interativo com JavaScript
            utilizando ferramentas como Imask,npm e Regex.
          </p>
          <div class="div-btn">
            <button class="btn">
              <p class="gradiente">
                <a href="https://explore-lab-omega.vercel.app/" target="_blank"
                  >Ver Projeto
                </a>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div class="projeto-card">
        <div>
          <a href="https://admirable-pasca-ffa679.netlify.app/" target="_blank">
            <img
              class="img"
              src="../assets/imgProjetos/caravan.png"
              alt="caravan"
            />
          </a>
        </div>
        <div class="conteudo">
          <h1 class="titulo">Caravan</h1>
          <div class="div-descricao">
            <p class="descricao">
              O projeto Caravan simula um site de viagens e nele utilizei o
              Framework Bootstrap concluindo um site totalmente responsivo e
              interativo.
            </p>
          </div>
          <div class="div-btn">
            <button class="btn">
              <p class="gradiente">
                <a
                  href="https://admirable-pasca-ffa679.netlify.app/"
                  target="_blank"
                  >Ver Projeto</a
                >
              </p>
            </button>
          </div>
        </div>
      </div>
      <button @click="subirScroll" class="seta">
        <img src="../assets/imgProjetos/seta.svg" alt="seta" />
      </button>
      <button @click="subirScroll" class="seta2">
        <img src="../assets/imgProjetos/seta.svg" alt="seta2" />
      </button>
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
    subirScroll() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  created() {
    this.loadingTime();
  },
};
</script>

<style scoped>
.seta {
  position: absolute;
  position: fixed;
  right: 100px;
  bottom: 50px;
  background-color: transparent;
  border: none;
  transform: rotate(180deg);
  cursor: pointer;
}
.seta2 {
  display: none;
  background-color: transparent;
  border: none;
  transform: rotate(180deg);
  cursor: pointer;
}
* {
  box-sizing: border-box;
}
h1 {
  color: #f9f9f9;
  text-align: center;
}
.img {
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
@media (max-width: 1350px) {
  .seta {
    right: 50px;
    bottom: 30px;
  }
}
@media (max-width: 1200px) {
  .seta {
    right: 30px;
    bottom: 20px;
    width: 60px;
  }
}

@media (max-width: 1100px) {
  .seta {
    right: 5px;
    bottom: 20px;
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
  .img {
    width: 300px;
    height: 400px;
  }
  .seta {
    display: none;
  }
  .seta2 {
    display: block;
    height: 55px;
    width: 50px;
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
  .img {
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
  .img {
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
  .img {
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
  .img {
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
  .img {
    width: 150px;
    height: 250px;
  }
  .container {
    gap: 50px;
    padding: 50px;
  }
}
</style>
