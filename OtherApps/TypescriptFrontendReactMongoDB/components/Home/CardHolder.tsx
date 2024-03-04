import { ICard } from "../../pages/Home";
import HomeCard from "./HomeCard";
import WelcomeJumboTron from "./WelcomeJumboTron";

export default function CardHolder(props: Readonly<ICard>) {
  const {  title, color, top } = props;
  return (
    <div
      className="cardHolder"
      style={{ backgroundColor: color, top: top}}
    >
      <WelcomeJumboTron title={title} />
      <HomeCard/>
    </div>
  );
}
