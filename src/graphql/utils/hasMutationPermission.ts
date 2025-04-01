const hasMutationPermission = process.env.ENABLE_DB_WRITE === "true";

export default hasMutationPermission;
