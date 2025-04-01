const throttledLimit = (
  limit: number | undefined,
  defaultLimit: number
): number => {
  return limit ? (limit > 100 ? 100 : limit) : defaultLimit;
};

export default throttledLimit;
