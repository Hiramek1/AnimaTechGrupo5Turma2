<template>
    <main>
        <section class="container">
            <h1>Novo Curso</h1>
            <form id="novo-curso">
                <div class="input-cotainer">
                    <input type="text" id="title" name="title" v-model="titulo" placeholder="Título">
                </div>
                <div class="input-cotainer">
                    <input type="text" id="logo" name="logo" v-model="logo" placeholder="Professor">
                </div>
                <div class="input-cotainer">
                    <input type="text" id="description" name="description" v-model="descricao" placeholder="Descrição">
                </div>
                <div class="aula">
                    <span>Aula 01</span>
                    <div class="input-cotainer">
                        <input type="text" id="classTitle" name="classTitle" v-model="tituloAula" placeholder="Título da aula">
                    </div>
                    <div class="input-cotainer">
                        <input type="text" id="classLink" name="loclassLinkgo" v-model="link" placeholder="Link da aula">
                    </div>
                    <div class="input-cotainer">
                        <input type="text" id="description" name="classDescription" v-model="descricaoAula" placeholder="Descrição da aula">
                    </div>
                </div>
                <div class="aula">
                    <span>Aula 02</span>
                    <div class="input-cotainer">
                        <input type="text" id="classTitle" name="classTitle2" v-model="tituloAula2" placeholder="Título da aula">
                    </div>
                    <div class="input-cotainer">
                        <input type="text" id="classLink" name="loclassLinkgo2" v-model="link2" placeholder="Link da aula">
                    </div>
                    <div class="input-cotainer">
                        <input type="text" id="description" name="classDescription2" v-model="descricaoAula2" placeholder="Descrição da aula">
                    </div>
                </div>
            </form>
        </section>
    </main>
</template>

<script>
    import api from '@/services/api.js';

export default {
    name:'Formulario',
    data(){
        return{
           about: ''
        }
    },
    mounted(){
        api.get('/about.json').then(response => {
            this.about = response.data.about;
        })
    }
}
</script>

<style scoped>

main{
    align-items: center;
    margin: 3%;
}

.aula {
    margin-top: 3%;
}

input, select {
    padding: 1%;
    width: 300px;
}

#description {
    height: 300px;
}

</style>