import express from "express";
import * as spotsController from "../controllers/spotsController.js";

const router = express.Router();

router
    .route("/")
    .get(spotsController.index)
    .post(spotsController.addSpot);

router
    .route("/:id")
    .get(spotsController.getSpotbyId);

export default router;
