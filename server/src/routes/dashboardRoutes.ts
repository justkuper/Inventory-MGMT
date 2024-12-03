import { Router } from "express";
import { getDashboardData } from "../controllers/dashboardController";

const router = Router();

router.get("/", getDashboardData);  // GET /dashboard

export default router;