export type ErrorProps = {
    error: {
      message?: string;
      details?: string;
    };
    reset: () => unknown;
};