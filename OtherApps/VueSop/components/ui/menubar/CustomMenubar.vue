<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger
} from '@/components/ui/menubar'
import { useAppStateStore } from '@/stores/appState'
import { ref } from 'vue'
const { setView } = useAppStateStore()

const settings = ref([{ title: 'Change View', method: 'changeView' }])

const sport = ref([
  { title: 'Prijava Dece', path: 'signIn' },
  { title: 'Sportske Dane', path: 'sportDays' },
  { title: 'Objave', path: 'sportPosts' }
])

const school = ref([
  { title: 'Nastava', path: 'school' },
  { title: 'Vesti', path: 'schoolNews' },
  { title: 'Kontakt', path: 'schoolContact' },
  { title: 'Gallerija', path: 'schoolGallery' }
])

const sop = ref([
  { title: 'SOP', path: 'sop' },
  { title: 'Instagram', path: 'socialMedia' },
  { title: 'Facebook', path: 'socialMedia' },
  { title: 'Kontakt', path: 'sopContact' }
])
</script>
<template>
  <Menubar class="menubar">
    <MenubarMenu>
      <MenubarTrigger>Settings</MenubarTrigger>
      <MenubarContent>
        <div v-for="item in settings" :key="item.method">
          <MenubarItem @click="() => setView()">
            {{ item.title }}<MenubarShortcut>⌘</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
        </div>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Sport</MenubarTrigger>
      <MenubarContent>
        <div v-for="item in sport" :key="item.path">
          <MenubarItem @click="$router.push(item.path)">
            {{ item.title }}<MenubarShortcut>⌘</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
        </div>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>School</MenubarTrigger>
      <MenubarContent>
        <div v-for="item in school" :key="item.path">
          <MenubarItem @click="$router.push(item.path)">
            {{ item.title }}<MenubarShortcut>⌘</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
        </div>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>SOP</MenubarTrigger>
      <MenubarContent>
        <div v-for="item in sop" :key="item.path">
          <MenubarItem @click="$router.push(item.path)">
            {{ item.title }}<MenubarShortcut>⌘</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
        </div>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>

<style scoped>
.menubar {
  position: absolute;
  bottom: 40%;
  margin: 0 auto;
  color: black;
  height: auto;
  border:none;
}
</style>
