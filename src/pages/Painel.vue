<template>
  <main>
    <section class="container">
      <h1>Painel Administrativo</h1>
      <p>Educação financeira é tudo de bom</p>
    </section>
    <table style="painel">
      <tr>
        <th>Curso</th>
      </tr>
      <div v-for="(cursos, index) in cursos" :key="index">
        <tr>
          <td>temp</td>
          <td>
            <div style="edit"><a href="/formulario">Editar</a></div>
            <div style="delete"><a href="/">Excluir</a></div>
          </td>
        </tr>
      </div>
      <tr>
        <a href="/formulario">Novo Curso</a>
      </tr>
    </table>
  </main>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "Painel",
  data() {
    return {
      cursos: [],
    };
  },
  mounted() {
    api.get("/contacts.json").then((response) => {
      this.cursos = response.data;
    });
  },
};
</script>

<style scoped>
main {
  align-items: center;
  margin-left: 3%;
}

table {
  width: 60%;
}

th,
td {
  width: 100%;
  border: 1px solid black;
  margin: 1%;
}

.edit {
  background-color: yellow;
}

.delete {
  background-color: tomato;
}
</style>