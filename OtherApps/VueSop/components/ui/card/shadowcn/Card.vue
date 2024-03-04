<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg bg-card text-card-foregroun shadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
