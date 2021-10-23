<template>
  <footer>
    <nav class="containerf">
      <img alt="DINDIN" id="logo" src="@/assets/dindin-logo.png" />
      <div id="dindin">
        <span class="dindin">dindin</span>
        <span class="educ-fin">educação financeira</span>
      </div>
    </nav>
    
  </footer>
</template>

<script>

export default {
  name: "Footer",
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
  justify-content: start;
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

</style>