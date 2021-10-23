<template>
  <main>
    <section class="container">
      <div class="container">
        <div class="resumo">
          <h1>Independência financeira</h1>
          <span
            >Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </span>
        </div>
        <div class="resumo">
          <img alt="" id="logoCurso" src="@/assets/image 4 (Traced).png" />
        </div>
      </div>
    </section>
    <section class="container">
      <div v-for="(video, index) in videos" class="video" :key="index">
        <div class="video-alt">
        <a :href="video.link" target="blank">
          <img :src="video.thumb" :alt="video.title" />
          <div class="video-title">{{ video.title }}</div>
        </a>
        </div>
        <div class="video-alt">
          <span>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "Interno3",
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    api.get("/videos.json").then((response) => {
      this.videos = response.data;
    });
  },
};
</script>

<style scoped>
main {
  margin: 3%;
}

#logoCurso {
  width: 65%;
}

.resumo {
  float: left;
  width: 30%;
  margin-bottom: 2%;
}

.video {
  width: 40%;
  margin-bottom: 30px;
}

.video-alt {
    float: left;
    margin-top: 2%;
    margin-bottom: 2%;
}

.video img {
  width: 100%;
}

.video a {
  color: var(--color-text-dark);
  font-weight: 600;
  text-align: center;
}

@media (min-width: 700px) {
  .video {
    margin-right: 30px;
    width: 300px;
  }
}
</style>