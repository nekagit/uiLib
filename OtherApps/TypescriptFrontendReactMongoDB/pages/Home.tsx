import SRBMinistar from "../../src/assets/heder-mirnije-removebg-preview.png";
import SOP from "../../src/assets/wg-removebg.png";
import OutletCard from "../components/Home/OutletCard";
import NavBar from "../components/NavBar/NavBar";

export interface IHomeCard {}
function Home() {
  return (
    <main>
      <div className="srbMinistar">
        <img
          src={SRBMinistar}
          className="h-auto max-w-full hover:animate-pulse"
          alt="Srbija"
        />
        <p className="hidden">
          Министарство <br /> просвете, науке и технолошког развоја <br />
          Амбасада Pепублике Cрбије хаг - Kраљевина Xоладија
        </p>
      </div>
      <nav>
        <NavBar />
      </nav>
      <div className="homeLogo">
        <img
          src={SOP}
          className="h-auto max-w-full hover:animate-pulse"
          alt="Stichting SOP Rotterdam"
        />
      </div>
      <OutletCard />
    </main>
  );
}
export default Home;
