import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <FontAwesomeIcon
      className="loading-spinner"
      icon={faSpinner}
      size="4x"
      spin
    />
  );
};

export default LoadingSpinner;
