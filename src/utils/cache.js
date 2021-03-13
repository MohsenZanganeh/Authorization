const redis = require("redis");
const { promisify } = require("util");

class Cache {
  connect() {
    const options = {
      host: "redis",
      port: "6379",
      db: 0,
    };

    this.client = redis.createClient(options);
    this.client.flushdb = promisify(this.client.flushdb).bind(this.client);
    this.client.hset = promisify(this.client.hset).bind(this.client);
    this.client.hdel = promisify(this.client.hdel).bind(this.client);
    this.client.hget = promisify(this.client.hget).bind(this.client);
    this.client.set = promisify(this.client.set).bind(this.client);
    this.client.del = promisify(this.client.del).bind(this.client);
    this.client.get = promisify(this.client.get).bind(this.client);
  }

  async hset(path, key, value) {
    return await this.client.hset(path, key, value);
  }

  async hdel(path, key) {
    return await this.client.hdel(path, key);
  }

  async hget(path, key) {
    return await this.client.hget(path, key);
  }

  async set(key, value, expireTime) {
    if (expireTime) {
      return await this.client.set(key, value, "EX", expireTime);
    }

    return await this.client.set(key, value);
  }

  async incr(key) {
    return await this.client.incr(key);
  }

  async del(key) {
    return await this.client.del(key);
  }

  async get(key) {
    return await this.client.get(key);
  }

  async flushDb() {
    return await this.client.flushdb();
  }

  getAllKeys() {
    return new Promise((resolve, reject) => {
      return this.client.keys("*", (err, keys) => {
        if (err) {
          reject(err);
        }

        resolve(keys);
      });
    });
  }
}

module.exports =new Cache();
