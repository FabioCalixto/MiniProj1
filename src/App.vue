<template>
  <Menu />
    <router-view/>
  <Footer />
</template>

<script>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',

  components: {
    Menu,
    Footer,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-weight: normal;
  font-size: 16px;
}

</style>
