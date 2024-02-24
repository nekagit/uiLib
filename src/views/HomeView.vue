<script setup lang="ts">
import JumboTron from '@/components/ui/card/img/jumboTron.vue';
</script>
<template>
  <main class="site">
    <section class="mainSection">
      <JumboTron />
    </section>
  </main>
</template>
<style scoped>
.site {
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  height: 95vh;
  background-color: antiquewhite;
}

.mainSection {
  width: 90%;
  height: 80vh;
  margin: 1rem;
  padding: 14px;
  border: 1px solid black;
  background-color: white;
}

</style>
