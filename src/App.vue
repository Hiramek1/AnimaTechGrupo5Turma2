<template>
  <div id="app">

    <Header />
    <router-view path = "$router.key" />
    <Footer/>

  </div>
</template>

<script>
import './styles/global.css';

import Header from './components/Header';
import Footer from './components/Footer';



export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

</style>
