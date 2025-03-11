"use client";

import { ErrorProps } from "@/utils/types/error.model";
import Error from "./error";

const GlobalError: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <html>
      <body>
        <Error error={error} reset={reset} />
      </body>
    </html>
  );
};

export default GlobalError;