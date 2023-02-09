import client from "../../database.js";

export function getJobs(data, callback = console.log) {
  let where = "";

  if (data.search) {
    where += `and title ilike '%${data.search}%'`;
  }

  const sql = `SELECT * FROM jobs where status in(1,2) ${where}`;

  client.query(sql, (error, res) => {
    if (error) {
      return callback(undefined, error);
    }
    callback(res.rows);
  });
}

export function createJob(data, callback = console.log) {
  let values = [
    data.title,
    data.description,
    data.status || 1,
    data.salary,
    data.period,
    data.img,
  ];

  client.query(
    "INSERT INTO jobs(title, description, status, salary, period, img) VALUES($1,$2,$3,$4,$5,$6)",
    values,
    (error, res) => {
      if (error) {
        return callback(undefined, error);
      }
      callback(res.rows);
    }
  );
}
