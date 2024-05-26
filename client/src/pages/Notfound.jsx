import React from "react";
import { Link } from "react-router-dom";

export const Notfound = () => {
  return (
    <div>
      <h1>404 page not found!</h1>
      <Link to={"/"}>Home</Link>
    </div>
  );
};
