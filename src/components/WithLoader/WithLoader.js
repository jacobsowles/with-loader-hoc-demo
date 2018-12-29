import React from "react";

import LoadingSpinner from "../LoadingSpinner";

const WithLoader = Component => {
  return ({ isLoading, ...rest }) => {
    return isLoading ? <LoadingSpinner /> : <Component {...rest} />;
  };
};

export default WithLoader;
