import { Router } from "express";
import  express  from "express";
import cors from "cors";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
  addMessage,
  getMessages,
  getUnreadMessages,
   markAsRead,
} from "../controllers/MessagesController.js";


export const messageRoutes = Router();
const app = express();
app.use(cors());
messageRoutes.post("/add-message/:orderId", verifyToken, addMessage);
messageRoutes.get("/get-messages/:orderId", verifyToken, getMessages);
 messageRoutes.get("/unread-messages", verifyToken, getUnreadMessages);
 messageRoutes.put("/mark-as-read/:messageId", verifyToken, markAsRead);