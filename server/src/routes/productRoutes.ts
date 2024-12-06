import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);  // GET /dashboard
router.post("/", createProduct); // POST /dashboard

export default router;