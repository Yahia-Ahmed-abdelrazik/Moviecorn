import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

import StarRating from "./StarRating.jsx";

function Rdd() {
  const [movierating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating
        maxRating={10}
        defultRating={3}
        onSetRating={setMovieRating}
      />
      {movierating}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Rdd />
    <StarRating maxRating={10} />

    <StarRating maxRating={10} defultRating={1} />
    <StarRating maxRating={10} defultRating={7} />
    <StarRating maxRating={10} defultRating={5} />
    <StarRating maxRating={10} defultRating={11} />
    <StarRating maxRating={10} />
  </React.StrictMode>
);
