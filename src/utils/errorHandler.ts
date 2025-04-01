/**
 * Handles errors by returning a formatted error message.
 *
 * @param error - The error to handle. Can be of any type.
 * @returns A string containing the error message if the input is an instance of `Error`,
 *          or a default "Unknown error" message if not.
 */
const errorHandler = (error: unknown) => {
  return `Error:${error instanceof Error ? error.message : "Unknown error"}`;
};

export default errorHandler;
