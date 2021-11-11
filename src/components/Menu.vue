<template>
  <header id="header">
    <nav class="nav">
    <h1 class="logo">
      <router-link to="/">Fábio Calixto</router-link>
    </h1>
      <ul class="menu">
        <li class="menu-options">
          <router-link to="/">Início</router-link>
        </li>
        <li class="menu-options">
          <router-link to="/sobre-me">Quem sou</router-link>
        </li>
        <li class="menu-options">
          <router-link to="/trabalhos">O que faço</router-link>
        </li>
        <li class="menu-options">
          <router-link to="/hobbies">Hobbies</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>
  #header {
    background-color: #fafafa;
    padding: 1rem;
  }

  .logo a {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
  }

  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-options {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-options a {
    color: #264653;
    text-decoration: none;
    margin: 0.5rem;
    text-transform: uppercase;
  }

  .menu-options a:hover {
    color: #001219;
  }
</style>
