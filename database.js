import pg from "pg";

const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "jobs",
  password: "2004.nasci",
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

export default client;
