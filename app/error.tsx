"use client";

import { ErrorProps } from "@/utils/types/error.model";
import { useEffect } from "react";

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => console.error(error), [error]);

  return (
    <div>
      <h2>Something went wrong!: {error.message} </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;