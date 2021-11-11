<template>
  <footer id="footer">
    <header class="copyright">
      <p>FC &copy; Todos os direitos reservados</p>
    </header>
    <header class="social-media">
      <ul class="menu">
        <li class="menu-options">
          <a href="https://facebook.com/fabio.calixto.5015" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="menu-options">
          <a href="https://instagram.com/fabyo_calixto" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="menu-options">
          <a href="https://linkedin.com/in/fábio-calixto-b9568a100" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li class="menu-options">
          <a href="https://github.com/FabioCalixto" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </header>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
  #footer {
    background-color: #fafafa;
    padding: 1rem;
  }

  .copyright {
    text-align: center;
  }

  .social-media {
    text-align: center;
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-options {
    list-style: none;
  }

  .menu-options a {
    text-decoration: none;
    margin: 0.5rem;
  }

  .menu-options .fab {
    font-size: 2rem;
  }
</style>
