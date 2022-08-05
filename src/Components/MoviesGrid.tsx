import react from "react";
import Movies from "./Movies.json";
import { MoviesCard } from "./MoviesCard";
import css from "../Modules/movieGrid.module.css";

export function MoviesGrid() {
  return (
    <ul className={css.grid}>
      {Movies.map((movie) => {
        return <MoviesCard movie={movie} />;
      })}
    </ul>
  );
}
