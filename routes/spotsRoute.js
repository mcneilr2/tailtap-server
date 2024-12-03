import express from "express";
import * as spotsController from "../controllers/spotsController.js";

const router = express.Router();

router
    .route("/")
    .post(spotsController.addSpot)
    .get(spotsController.index);

router
    .route("/:id")
    .get(spotsController.getSpotbyId);

export default router;
