import { appView } from '@/interfaces/App'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStateStore = defineStore('appState', {
  state: () => {
    const currentMode = ref(appView.List)
    return { currentMode }
  },
  actions: {
    setView() {
      console.log('asdf')
      if (this.currentMode == appView.List) {
        this.currentMode = appView.Solo
        console.log('heheh', this.currentMode)
      } else {
        this.currentMode = appView.List
        console.log('egeege', this.currentMode)
      }
    },

    setActive() {}
  }
})
