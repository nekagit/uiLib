<script setup lang="ts">
import { ref } from 'vue'
const images = ref([
  "https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg",
   "../../../../assets/border/border-edge-nine.svg",
   "https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg",
   "../../../../assets/border/border-edge-nine.svg",
   "https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg"
])
</script>
<template>
  <section class="jumboTron">
    <!-- <div v-for="img in images" :key="img"> -->
      
    <img :src="images[0]" alt="asdf" />
    <!-- </div> -->
  </section>
</template>
<style scoped>
.jumboTron {
  margin: auto;
  padding: 0;
  width: 100%;
  height: auto;
  min-height: 300px;
  border: 30px solid blue;
  /* background: url('https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg'); */
  border-image: url('../../../../assets/border/border-edge-nine.svg');
 background-repeat: no-repeat;
  background-size: contain;
  border-image-slice:33%;
  background-color: rgb(34, 34, 34);
}

img {
  width:100%;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
