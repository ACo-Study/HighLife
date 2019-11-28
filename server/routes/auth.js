import express from "express";
import TB_USER from "../models/user";

const router = express.Router();

router.post("/login", (req, res) => {
  console.log(req.body.username);
  TB_USER.findAll().then(results => {
    console.log("result: ", results[0].dataValues);
  });
});

export default router;
