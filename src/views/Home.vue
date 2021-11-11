<template>
  <div class="wrapper">
    <div class="banner">
      <div class="content">
        <h1>Seja bem-vindo ao meu site</h1>
        <p>Navegue pelo site e descubra o que faço, quais os meus hobbies!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {},
};
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 60vh;
    background: #003049;
  }

  .banner {
    margin: 0 auto;
    width: 70%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 60vh;
  }

  .content h1 {
    font-size: 3rem;
    font-weight: bold;
    width: 24rem;
  }

  .content p {
    font-size: 1.5rem;
  }
</style>
