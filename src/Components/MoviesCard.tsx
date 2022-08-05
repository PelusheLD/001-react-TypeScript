import React from "react";
import css from "../Modules/movieCard.module.css";

interface MoviesCardProps {
  movie: {
    poster_path: string;
    title: string;
  };
}

export function MoviesCard({ movie }: MoviesCardProps) {
  const urlImg = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={css.titulo}>
      <div className={css.efect}>
        <img className={css.image} src={urlImg} alt={movie.title} />
        <div>{movie.title}</div>
      </div>
    </li>
  );
}
