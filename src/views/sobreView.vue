<template>
  <div class="content">
    <h1>Sobre</h1>
    <p class="paragrafo">
      Olá, meu nome é Anderson Duarte, tenho 25 anos, moro em Camaquã - RS, com
      o objetivo de conseguir minha primeira vaga como Dev estou 100% focado e
      dedicado aos estudos, aumentando minha experiência assim podendo dar o meu
      melhor ao mercado de trabalho. Além disso me mantendo sempre atualizado
      com cursos intensivos online. Procuro evoluir cada dia mais para alcançar
      meus objetivos e ser um grande profissional no ramo da programação.
    </p>
    <div class="minhas-skills">
      <h1>Minhas skills</h1>

      <div class="skills">
        <img title="HTML" src="../assets/skills/html5.svg" alt="" />
        <img title="CSS" src="../assets/skills/css3.svg" alt="" />
        <img title="JavaScript" src="../assets/skills/javascript.svg" alt="" />
        <img title="Bootstrap" src="../assets/skills/bootstrap.svg" alt="" />
        <img title="Vuejs" src="../assets/skills/vue.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content h1 {
  font-size: 2.5rem;
}
.paragrafo {
  font-size: 1.5rem;
}
.content {
  color: #f9f9f9;
  margin: 0 auto;
  text-align: center;
  width: 86ch;
  padding-top: 50px;
  padding-bottom: 50px;
}
.content p {
  margin-top: 20px;
}
.skills {
  display: flex;
  height: 70px;
  justify-content: center;
  padding: 10px;
  gap: 25px;
}
.minhas-skills {
  padding-top: 50px;
}
.skills img {
  animation: dots 1.5s cubic-bezier(0, 0, 0, 0.5) infinite;
}
.skills img:nth-child(1) {
  animation-delay: 0.1s;
}
.skills img:nth-child(2) {
  animation-delay: 0.3s;
}
.skills img:nth-child(3) {
  animation-delay: 0.5s;
}
.skills img:nth-child(4) {
  animation-delay: 0.7s;
}
.skills img:nth-child(5) {
  animation-delay: 0.9s;
}
@keyframes dots {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 8px, 0);
  }
}
</style>
