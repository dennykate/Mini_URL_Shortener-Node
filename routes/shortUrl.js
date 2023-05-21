import express from "express";
import { create, destroy, show, showAll } from "../controllers/shortUrl.js";

const router = express.Router();

router.get("/", showAll);
router.get("/:id", show);
router.post("/", create);
router.post("/:id", destroy);

export default router;
