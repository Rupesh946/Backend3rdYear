import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

async function cacheUserProfile() {
  await client.set("user:2", JSON.stringify({ name: "Rupesh", age: 21 }));
  console.log("Profile cached");
}

async function readProfile() {
  const data = await client.get("user:2"); // fixed key
  return JSON.parse(data);
}

async function main() {
  try {
    await client.connect(); // await the connection
    await cacheUserProfile();

    const profile = await readProfile();
    console.log("Fetched Profile:", profile);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.quit(); // close connection properly
  }
}
 
