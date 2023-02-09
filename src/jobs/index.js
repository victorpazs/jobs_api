import { Router } from "express";
import * as Jobs from "./logic.js";
const jobsRouter = Router();

jobsRouter.get("/", (req, res) => {
  Jobs.getJobs(req.query, (data, error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(data);
    }
  });
});

jobsRouter.post("/", (req, res) => {
  Jobs.createJob(req.body, (data, error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(data);
    }
  });
});

export default jobsRouter;
