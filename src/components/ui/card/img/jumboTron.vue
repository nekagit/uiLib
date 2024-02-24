<script setup lang="ts">
import ref from "vue"
const images = ref({
  first: "https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg",
  second: "../../../../assets/border/border-edge-nine.svg",
  third: "https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg",
  fourth: "../../../../assets/border/border-edge-nine.svg",
  fifth: "https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/img/slides/1.jpg"
})
</script>
<template>
  <section class="jumboTron">
    <div :v-for="img in images">
    <img :src="img" alt="asdf" />
    </div>
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
