<template>
  <div class="header">
    <router-link id="link-home" to="/">Portfólio</router-link>
    <nav class="navegacao">
      <img class="obj1" src="../assets/objD.svg" alt="objeto" />
      <router-link to="/">Home</router-link>
      <router-link to="/projetos">Projetos</router-link>
      <router-link to="/sobre">Sobre</router-link>

      <img class="obj2" src="../assets/objE.svg" alt="objeto" />
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#link-home {
  text-decoration: none;
  color: #f9f9f9;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 30px 60px;
  box-sizing: border-box;
  flex-wrap: wrap;
}
img {
  height: 20px;
}
.portifolio {
  color: #f9f9f9;
}
.navegacao {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.links {
  display: flex;
  gap: 20px;
}
.navegacao a {
  text-decoration: none;
  color: #f9f9f9;
}
nav a.router-link-exact-active {
  color: #84e;
}
@media (max-width: 500px) {
  .obj1 {
    display: none;
  }
  .obj2 {
    display: none;
  }
}
@media (max-width: 440px) {
  .conteudo {
    font-size: 1rem;
  }
}
@media (max-width: 400px) {
  .navegacao {
    margin-top: 50px;
    margin: 0 auto;
    padding: 30px 0;
  }
  .header {
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
  }
  #link-home {
    margin: 0 auto;
  }
}
</style>
