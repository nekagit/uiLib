import { Outlet } from "react-router-dom";
import "../../Cards.css";

export default function OutletCard () {
     
    return (
      <section className="outletCard">
        <Outlet />
      </section>
    );
}