/**
 * Builds a conditional query object by filtering out specified fields and excluding
 * entries with `undefined` or `null` values from the provided filter object.
 *
 * @param filter - The input object containing key-value pairs to be filtered.
 * @param excludeFields - An array of field names to exclude from the resulting object.
 * @returns A new object containing only the key-value pairs that are not in the
 * `excludeFields` array and have defined, non-null values.
 */
const buildConditionalQuery = (filter: any, excludeFields: string[]) => {
  return Object.fromEntries(
    Object.entries(filter).filter(
      ([key, value]) =>
        !excludeFields.includes(key) && value !== undefined && value != null
    )
  );
};

export default buildConditionalQuery;
