import { useState } from "react";
import { ICardBox } from "../../interfaces/Interfaces";
import ActiveCard from "./ActiveCard";

export default function CardBox(props: Readonly<ICardBox>) {
  const { cards } = props;
  const [active, setActive] = useState(true);
  const onSetActive = (id: string) => {
    const newActive = cards.find((x) => x.title == id);
    // setActive(newActive)
    console.log(id);
  };
  return <ActiveCard key={cards[0].title} card={cards[0]} />;
}
