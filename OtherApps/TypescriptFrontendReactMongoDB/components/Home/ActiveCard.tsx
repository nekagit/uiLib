import { IActiveCard } from "../../interfaces/Interfaces";
import CustomForm from "../ui/CustomForm";

export default function ActiveCard(props: Readonly<IActiveCard>) {
  const { card } = props;
  return (
    <div key={card.title} className="activeCardWrapper">
      <input type="radio" name="slide" checked />
      <div className="activeCard">
        <CustomForm />
      </div>
    </div>
  );
}
