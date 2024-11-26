import express from "express";
import * as spotsController from "../controllers/spotsController.js";

const router = express.Router();

router.route("/").get(spotsController.index);

export default router;
