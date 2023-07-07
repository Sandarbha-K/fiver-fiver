import { Router } from "express";
import cors from "cors";
import  express  from "express";

import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { getSellerData } from "../controllers/DashboardController.js";

export const dashboardRoutes = Router();
const app = express();
app.use(cors());
dashboardRoutes.get("/seller", verifyToken, getSellerData);