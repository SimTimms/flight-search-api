import { createClient } from "redis";

async function redisClient(
  connectionURL: string
): Promise<ReturnType<typeof createClient>> {
  if (!connectionURL) {
    throw new Error("Redis connection URL is not defined");
  }

  const redisConnection = createClient({
    username: "default",
    password: "2el8eMzUAGV7Nq4KVoPufEgvzosC2lSX",
    socket: {
      host: connectionURL,
      port: 11240,
    },
  });

  redisConnection.on("error", (err) => {
    throw new Error(`Redis connection error: ${err.message}`);
  });

  redisConnection.on("ready", () => {
    console.log("Redis connected successfully");
  });

  await redisConnection.connect();

  return redisConnection; // Return the Redis client instance
}

export default redisClient;
