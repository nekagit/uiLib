export interface Prijava {
  name:string;
  lastName:string;
  phone:string;
  email:string;
  sport:string;
}

export interface ICard {
  active: boolean;
  title: string;
  backgroundSrc: string;
  htmlFor: string;
  buttonCards: IButtonCard[];
}

export interface ICardBox {
  cards: ICard[];
}

export interface ISlideCard {
  card: ICard;
  onSetActive: (id: string) => void;
}

export interface ICardNavBar {
  card: ICard;
  onSetActive: (id: string) => void;
}

export interface IActiveCard {
  card: ICard;
}

export interface IButtonCard {
  title: string;
  subTitle: string;
  backgroundSrc: string;
  images: IImages[];
  contentCard: React.ReactNode;
}

export interface IContentCard {
  title: string;
  subTitle: string;
  backgroundSrc: string;
  images: IImages[];
  form?: IForm;
  posts?: IPost[];
}

export interface IForm {
  selectInputs: ISelectInputs;
  textInputs: ITextInputs;
  buttons: IButton;
}

export interface IPost {
  title: string;
  content: string[];
}

export interface IImages {
  src: string;
}

export interface IButton {
  title: string;
}

export interface ISelectInputs {
  title: string;
  options: ISelectOption[];
}

export interface ITextInput {
  name:string;
  placeholder: string;
  label:string
  description: string;
}

export interface ISelectOption {
  title: string;
}

export interface IJumboTron {
  title: string;
}
