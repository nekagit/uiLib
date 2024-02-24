<script setup lang="ts">
import BaseCard from '@/components/ui/card/base/baseCard.vue';
</script>
<template>
  <main class="site">
    <section class="mainSection">
      <BaseCard />
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
