const hasMutationPermission = (): boolean => {
  return process.env.ENABLE_DB_WRITE === "true";
};
export default hasMutationPermission;
