import React from "react";
import { MoviesGrid } from "./MoviesGrid";
import css from "../Modules/title.module.css";

function App() {
  return (
    <div>
      <header>
        <div className={css.titulo}>
          <h1>Estrenos</h1>
        </div>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}

export default App;
