<script setup lang="ts">
import Stars from '@/components/ui/background/Stars.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <main class="grid h-screen m-auto">

      <RouterView />
  
  </main>
  <Stars />
</template>
