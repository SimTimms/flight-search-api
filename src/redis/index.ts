import IORedis from "ioredis";

export default class RedisConnectionFactory {
  getNewRedisClient(name: string): IORedis.Redis {
    const client = new IORedis(REDIS_URL);

    client.on("connect", () => {
      console.log({
        msg: "Connected to Redis",
        client: name,
      });
    });
    client.on("error", (err) => {
      console.error({ msg: "redis error", err, client: name });
    });

    return client;
  }
}

export const redisConnectionFactory = new RedisConnectionFactory();
