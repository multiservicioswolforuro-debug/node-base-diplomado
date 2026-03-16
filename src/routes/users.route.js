import express from "express";
import { listPagination } from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/users/list/pagination:
 *   get:
 *     summary: Obtener usuarios con paginación
 *     description: Retorna la lista de usuarios con paginación
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/list/pagination", listPagination);

export default router;