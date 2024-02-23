import type { ICustomCard } from '@/interfaces/App'
import CardData from '@/stores/cardData.json'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCardStore = defineStore('cards', {
  state: () => {
    const allCards: ICustomCard[] = CardData.allCards.splice(0, 3 )
    const cards = ref(allCards)
    const activeCard = ref(cards.value.find((x) => x.main) ?? cards.value[0])
    return { cards, activeCard }
  },
  actions: {
    setInactive(newActiveTitle: string) {
      const newActive = this.cards.find((x) => x.title == newActiveTitle)
      if (newActive != undefined) newActive.active = false
    },

    setActive(newActiveTitle: string) {
      const newActive = this.cards.find((x) => x.title == newActiveTitle)
      if (newActive != undefined) newActive.active = true
    },
    setInactiveMain(newActiveTitle: string) {
      const newActive = this.cards.find((x) => x.title == newActiveTitle)
      if (newActive != undefined) newActive.active = false
    },

    setActiveMain(newActiveTitle: string) {
      const newActive = this.cards.find((x) => x.title == newActiveTitle)
      if (newActive != undefined) newActive.active = true
    }
  }
})
