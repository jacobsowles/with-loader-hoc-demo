import React from "react";

import puppy from "./puppy.jpg";
import "./PuppyPicture.css";

const PuppyPicture = () => {
  return (
    <div className="puppy-picture">
      <img src={puppy} alt="puppy" />
    </div>
  );
};

export default PuppyPicture;
