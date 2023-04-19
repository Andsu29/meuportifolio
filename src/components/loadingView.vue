<template>
  <div class="loading">
    <div class="texto-dinamico">
      <ul>
        <li><span class="gradiente">Meus</span></li>
        <li><span class="gradiente">Projetos</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "loadingView",
};
</script>

<style scoped>
ul {
  list-style: none;
  min-width: 500px;
  overflow: hidden;
}
.loading {
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
  color: #f9f9f9;
  padding-left: 300px;
  overflow: hidden;
}
.texto-dinamico {
  font-size: 40px;
  height: 47px;
  animation: opaci 2s infinite;
  font-weight: bold;
  overflow: hidden;
}

ul li {
  position: relative;
  top: 0px;
  animation-name: load;
  animation-duration: 8s;
  animation-timing-function: steps(4);
  animation-iteration-count: infinite;
}

@keyframes load {
  100% {
    top: -200px;
  }
}

ul li::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  border-left: 2px solid #84e;
  animation: typing 2s steps(14) infinite;
  background: #10101a;
}

ul li:nth-of-type(2)::after {
  animation-name: typ;
  animation-timing-function: steps(15);
}

@keyframes typing {
  40%,
  60% {
    left: 24%;
  }
  100% {
    left: 0;
  }
}
@keyframes typ {
  40%,
  60% {
    left: 35%;
  }
  100% {
    left: 0;
  }
}
@keyframes opaci {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
</style>
