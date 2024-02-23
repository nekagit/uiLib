import { type Component } from 'vue'
export interface ICustomCard {
  title: string
  description: string
  active: boolean
  sectionHeaders: ISectionHeader[]
  cardPic: string
  main: boolean
  color: string
}
export interface ISectionHeader {
  title: string
  description: string
  img?: string
  childComponent?: Component
}

export enum appView {
  List,
  Solo
}
