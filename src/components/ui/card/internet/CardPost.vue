<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import CustomImage from '@/components/ui/baseElements/CustomImage.vue'
import type { ICustomCard } from '@/interfaces/App'
import { computed } from 'vue'
const props = defineProps<ICustomCard>()
const imageSrc = (path: string) => computed(() => path)
</script>

<template>
  <div class="card sm:w-screen md:w-32 lg:w-screen mx-5">
    <div class="cardContent">
      <div v-for="sectionHeader in props.sectionHeaders" :key="sectionHeader.title">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger class="text-black hover:text-white no-underline">
              <h3 class="text-black  hover:text-white">
                {{ sectionHeader.title }}
              </h3>
            </AccordionTrigger>
            <AccordionContent>
              {{ sectionHeader.description }}
              <CustomImage :src="imageSrc(sectionHeader.img ?? '@/assets/logoo.png').value" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: auto;
  width: 100%;
  padding: 21px;
  color: black;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  overflow: hidden;
}

.cardContent {
  overflow: hidden;
}
</style>
