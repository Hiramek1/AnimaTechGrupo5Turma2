<template>
  <footer>
    <nav class="containerf">
      <img alt="DINDIN" id="logo" src="@/assets/dindin-logo.png" />
      <div id="dindin">
        <span class="dindin">dindin</span>
        <span class="educ-fin">educação financeira</span>
      </div>
    </nav>
    <nav id="socialLinkAlign">
      <a class="socialLink" v-for="(socialLink, index) in socialLinks" :key="index" target="blank" :href="socialLink.link">
        <img :alt="socialLink.label" :title="socialLink.label" :src="socialLink.icon">
      </a>
    </nav>
    
  </footer>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "Footer",

  data() {
    return {
      socialLinks: [],
    };
  },
  mounted() {
    api.get('/social-links.json').then(response => {
      this.socialLinks = response.data;
    });
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 60px;
  background-color: var(--color-background-nav);
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo {
  width: 56px;
  margin-left: 5%;
  padding: 5px;
}

.containerf {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
}

#dindin {
  display: flex;
  flex-direction: column;
}

.educ-fin {
  font-family: Ubuntu;
  font-style: normal;
  font-size: 9px;
  line-height: 23px;
  color: #FFFFFF;
}

.dindin {
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 23px;
  color: #FFFFFF;
}

#socialLinkAlign {
  display: flex;
  flex-direction: row;
  margin-right: 5%;
}

.socialLink{
    border: 2px solid var(--color-text-light);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin: 0 10px;
}

.socialLink img{
    width: 20px;
}

</style>