<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import type { ICustomCard } from '@/interfaces/App'
const props = defineProps<ICustomCard>()
</script>

<!-- backgroundColor: props.color  -->
<template>
  <Card class="card w-full md:w-[1750px]">
    <CardHeader class="d-flex flex-row justify-around">
      <CardTitle class="hover:text-black" style="margin-right: 7vw; margin-left: 3vw">
        {{ props.title }}
      </CardTitle>
      <img
        :src="props.cardPic"
        :alt="props.title"
        :class="'h-60 w-60 border-4 object-cover transition-all hover:scale-105 aspect-square'"
        style="margin-top: -50px; margin-right: -100px"
      />
    </CardHeader>
    <CardDescription
      class="text-black text-xl"
      style="margin: auto; padding-left: 3vh; padding-right: 3vh"
      >{{ props.description }}</CardDescription
    >
    <CardContent>
      <form>
        <div v-for="sectionHeader in props.sectionHeaders" :key="sectionHeader.title">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger class="hover:text-black no-underline">
                <h5 class="hover:text-black">
                  {{ sectionHeader.title }}
                </h5>
              </AccordionTrigger>
              <AccordionContent>
                <img :src="sectionHeader.img" alt="sponsori" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <!-- <component :is="sectionHeader.childComponent"></component> -->
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <h5 class="hover:text-black">Prijava za Sportske dane</h5>
      <Sheet>
        <SheetTrigger>
          <Button class="bg-white text-black hover:bg-black hover:text-white">Prijavi</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </CardFooter>
  </Card>
</template>

<style scoped>
.card {
  background: url('../../../assets/rectangle-frame-tropical-background/rm112-jj-016.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 3vh;
}
</style>
