<template>
  <div class="contato-container">
    <div class="redes">
      <div class="div-link">
        <a title="GitHub" href="https://github.com/Andsu29" target="_blank">
          <img src="../assets/iconColors/github.svg" alt="github" />
        </a>
      </div>
      <div class="div-link">
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/anderson-duarte-74346b240/"
          target="_blank"
        >
          <img src="../assets/iconColors/linkedin.svg" alt="linkedin" />
        </a>
      </div>
      <div class="div-link">
        <a
          title="Instagram"
          href="https://www.instagram.com/andsu_duart/"
          target="_blank"
        >
          <img src="../assets/iconColors/instagram.svg" alt="instagram" />
        </a>
      </div>
      <div class="div-link">
        <a
          title="Email"
          href="mailto:andersonduarteg4@gmail.com"
          target="_blank"
        >
          <img src="../assets/iconColors/email.svg" alt="email" />
        </a>
      </div>
      <div class="div-link">
        <a title="WhatsApp" href="https://wa.me/5551994323519" target="_blank">
          <img class="whats" src="../assets/iconColors/whats.svg" alt="whats" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.div-link {
  width: 50px;
}
.contato-container {
  margin-right: 80px;
  color: #f9f9f9;
  animation: midias 3s;
  padding: 0px;
  overflow: hidden;
}
.contato-container::after {
  content: "";
  position: absolute;
  top: 400px;
  left: 73px;
  height: 200px;
  width: 2px;
  background-color: #f9f9f9;
  animation: social 2s;
}
.redes {
  position: absolute;
  left: 50px;
  right: 50px;
}
.redes img:hover {
  transform: scale(1.3);
}
.redes a {
  display: flex;
  height: 50px;
}
.whats {
  margin-top: 10px;
  height: 25px;
  margin-left: 12px;
}
@keyframes social {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes midias {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 850px) {
  .contato-container::after {
    display: none;
  }
  .redes a {
    display: inline-block;
    gap: 50px;
  }
  .redes img {
    margin-top: 10px;
    height: 50px;
    margin-left: 12px;
  }
  .whats {
    position: absolute;
    max-height: 30px;
    bottom: 9px;
  }
  .redes {
    padding-right: 50px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 400px) {
    .redes img {
      margin-top: 10px;
      height: 40px;
      margin-left: 12px;
    }
    .whats {
      position: absolute;
      max-height: 25px;
      bottom: 14px;
    }
  }
}
</style>
