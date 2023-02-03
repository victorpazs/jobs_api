import express from "express";
import jobsRouter from "./src/jobs/index.js";
import { getJobs } from "./src/jobs/logic.js";

const app = express();

const port = 7000;

app.use(express.json());

app.use("/v1/jobs", jobsRouter);
app.listen(port, () => console.log(`rodando em ${port}`));
