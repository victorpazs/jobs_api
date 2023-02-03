import client from "../../database.js";

export function getJobs(data, callback = console.log) {
  client.query("SELECT * FROM jobs", (error, res) => {
    if (error) {
      return callback(undefined, error);
    }
    callback(res.rows);
  });
}
