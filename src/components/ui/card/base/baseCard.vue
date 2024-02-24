<script setup lang="ts">
import { ref } from 'vue'
const images = ref([
  'https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg',
  '../../../../assets/border/border-edge-nine.svg',
  'https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg',
  '../../../../assets/border/border-edge-nine.svg',
  'https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg'
])
</script>
<template>
  <section class="jumboTron">
    <!-- <div v-for="img in images" :key="img"> -->

    <img :src="images[0]" alt="asdf" />
  </section>
</template>
<style scoped>
.jumboTron {
  margin: auto;
  padding: 1rem;
  width: 100%;
  height: auto;
  min-height: 300px;
  border: 30px solid white;
  border-image: url('../../../../assets/border/border-edge-nine.svg');
  border-image-slice: 33%;
  background-color: rgb(36, 36, 36);
  border-radius: 100px;
  transition: all .5s ease-in-out;
}

.jumboTron:hover {
  background-color: rgb(36, 36, 36);
}

img {
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
