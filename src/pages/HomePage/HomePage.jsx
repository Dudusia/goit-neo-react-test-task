import css from "./HomePage.module.css"
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
  <div className={[css["homepage-container"], css["container"]].join(" ")}>
    <h1 className={css["homepage-title"]}>Campers of your dreams</h1>
    <h2 className={css["homepage-call-to-action"]}>You can find everything you want in our catalog</h2>
    <NavLink to="/catalog">
      <button className={css["catalog-button"]}>
        View Now
      </button>
    </NavLink>
  </div>
);
}
