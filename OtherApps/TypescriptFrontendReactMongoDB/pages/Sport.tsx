import {
  default as KrosRTS,
  default as SrpOmlPrRotterdam,
} from "../assets/sport0.jpg";
import CardHolder from "../components/Home/CardHolder";
import { ICard } from "../interfaces/Interfaces";

function Sport() {
  const allCards: ICard[] = [
    {
      title: "Srpsko Omladinsko Prijateljstvo Rotterdam",
      backgroundSrc: SrpOmlPrRotterdam,
    },
    { title: "Kros RTS", backgroundSrc: KrosRTS },
    { title: "Sportevi", backgroundSrc: KrosRTS },
    { title: "Sportski dani", backgroundSrc: KrosRTS },
    {
      title: "Pregled godina",
      backgroundSrc: KrosRTS,
    },
  ];
  return (
    <>
      {allCards.map((x) => (
        <CardHolder
          key={x.title}
          title={x.title}
          backgroundSrc={x.backgroundSrc}
        />
      ))}
    </>
  );
}
export default Sport;
