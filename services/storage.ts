import { createStorage } from "unstorage";
import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding";
import memoryDriver from "unstorage/drivers/memory";
import MockData from "./mockData";

const evalEnv = () => {
  try {
    if (CLOUDFLARE_ENV) {
      return "CLOUDFLARE_ENV";
    } else {
      throw new Error("'CLOUDFLARE_ENV' global variable not found")
    }
  } catch (e) {
    return "NODE_ENV";
  }
};
const env = evalEnv();

const getStorageDriver = () => {
  if (env === "CLOUDFLARE_ENV") {
    return cloudflareKVBindingDriver({ binding: "testkv" });
  }
  return memoryDriver();
};

// defineEventHandler(async (req) => {
//   /* Nuxt 3 uses h3 as its HTTP server, with its function being auto-imported
//     https://github.com/unjs/h3
//     https://www.jsdocs.io/package/h3
//   */
//   const value = await useBody(req)

//   await storage.setItem('my-value', value.inputValue)

//   const myValue = await storage.getItem('my-value')

//   return {
//     status: 201,
//     response: `Value ${myValue} saved in storage`
//   }
// })

const storage = createStorage({
  driver: getStorageDriver(),
});

if (env !== "CLOUDFLARE_ENV") {
  MockData.forEach((data, index) => storage.setItem("items:" + index, data));
}

export default storage;
