<template>
    <main>
        <section class="container">

            <div class="container">
            <h1>Cursos</h1>
            <p>Educação financeira é tudo de bom</p>
            </div>

            <section class="videos">

                <div class="video">
                    <a  href="/interno">
                        
                        <h1>Investimento para iniciantes</h1>
                        <img src="@/assets/image 3 (Traced).png" alt="Investimento para iniciantes">

                </a>
                </div>

                <div class="video">
                    <a  href="/interno2">

                        <h1>Poupando e Rendendo</h1> 
                        <img src="@/assets/image 2 (Traced).png" alt="Poupando e rendendo">

                </a>
                </div>

                <div class="video">
                    <a  href="/interno3">
                        
                        <h1>Independência Financeira</h1>
                        <img src="@/assets/image 4 (Traced).png" alt="Independência Financeira">

                </a>
                </div>

            </section>

        </section>
    </main>
</template>

<script>
import api from '@/services/api.js';

export default {
    name:'Cursos',
    data(){
        return{
            videos: []
        }
    },
    mounted(){
        api.get('/videos.json').then(response => {
            this.videos = response.data;
        })
    }
}
</script>

<style scoped>

    main{
        align-items: center;
        padding: 3%;
    }

    .videos{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .video{
        width: 80%;
        margin-bottom: 30px;
    }

    .video img{
        width: 100%;
    }

    .video a{
        color: var(--color-text-dark);
        font-weight: 600;
        text-align: center;
    }

    @media (min-width: 700px){
        .videos{
            flex-direction: row;
            align-items: flex-start;
            flex-wrap: wrap;
        }

        .video{
            margin-right: 30px;
            width: 300px;
        }
    }

</style>