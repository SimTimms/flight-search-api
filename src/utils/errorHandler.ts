const errorHandler = (error: unknown) => {
  return `Error:${error instanceof Error ? error.message : "Unknown error"}`;
};

export default errorHandler;
