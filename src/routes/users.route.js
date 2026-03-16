import express from "express";
import { listPagination } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/list/pagination", listPagination);

export default router;