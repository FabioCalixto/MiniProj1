<template>
  <section class="wrapper">
    <div class="content">
      <div class="text-wrapper">
        <p>
          Atualmente tenho trabalhado e liderando a equipe de desenvolvimento da <a href="https//paga3.com" target="_blank">Paga3</a>, que é uma Startup Fintech, que atua como intermediario de pagamentos por prestação.
        </p>
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

  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }

  .text-wrapper p {
    font-size: 1.5rem;
    text-align: center;
    line-height: 2rem;
    width: 80%;
  }

  @media (max-width: 736px) {
    .text-wrapper p {
      text-align: left;
    }
  }
</style>
