<script setup lang="ts">
import Stars from '@/components/ui/background/Stars.vue'
import MenuBar from '@/components/ui/menubar/CustomMenubar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="grid h-screen m-auto">

      <RouterView />
      <MenuBar />
  
  </main>
  <Stars />
</template>
