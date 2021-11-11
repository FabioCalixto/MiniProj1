<template>
  <section class="wrapper">
    <div class="content">
      <div class="content-wrapper">
        <div class="text-wrapper">
          <p>
            Licenciado em Engenharia Informática em 2015 pelo Instituto Superior Técnico Militar, especialista em Desenvolvimento de Software.
            TeamLeader da equipa de Desenvolvedores de Software das FAA, CTT na Startup Paga3, Mestrando na Universidade Trás dos Montes (UTAD) em Tecnologias Web.
          </p>
        </div>
        <div class="image-wrapper">
          <img src="https://github.com/FabioCalixto.png" alt="Fábio Calixto" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 60vh;
  }

  .content {
    margin: 0 auto;
    width: 70%;
  }

  .content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 4rem;
  }

  .image-wrapper img {
    border-radius: 0.4rem;
    margin-left: 4rem;
  }

  .text-wrapper p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: #161a1d;
  }
</style>
