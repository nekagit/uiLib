import { ISlideCard } from "../../interfaces/Interfaces";

export default function SlideCard(props: Readonly<ISlideCard>) {
  const { card, onSetActive } = props;
  return (
    <>
      <input type="radio" name="slide" id={card.htmlFor} />
      <label htmlFor={card.htmlFor} className="card">
        <div className="column">
          <div className="icon">{card.title}</div>
          <div className="description">
            {card.buttonCards.map((x) => (
              <h4 key={card.title}>
                <button
                  onClick={() => onSetActive(x.title)}
                  className="button-30"
                >
                  {card.title}
                </button>
              </h4>
            ))}
          </div>
        </div>
      </label>
    </>
  );
}
