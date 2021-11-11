<template>
  <section class="wrapper">
    <div class="content">
      <h1>O que eu faço quando não estou trabalhando!</h1>
      <div class="cardWrapper">
        <div class="card">
          <div class="icon">
            <i class="fas fa-gamepad"></i>
          </div>
          <span>Video Game</span>
        </div>
        <div class="card">
          <div class="icon">
            <i class="fas fa-book-reader"></i>
          </div>
          <span>Leitura</span>
        </div>
        <div class="card">
          <div class="icon">
            <i class="fas fa-music"></i>
          </div>
          <span>Ouvir Música</span>
        </div>
        <div class="card">
          <div class="icon">
            <i class="fas fa-tv"></i>
          </div>
          <span>TV Show</span>
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
    padding: 4rem;
  }

  .content h1 {
    width: 60%;
    font-size: 2.5rem;
    font-weight: bold;

  }

  .cardWrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 10px;
    padding: 3rem;
    border-radius: 0.4rem;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .icon .fas {
    font-size: 2.5rem;
    margin-bottom: 0.7rem;
  }
</style>
