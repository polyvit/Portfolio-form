import { Router } from "express";
import AuthController from "../controllers/Auth.js";

const router = Router();

router.post("/sign-up", AuthController.signUp);
router.post("/sign-in", AuthController.signIn);
router.post("/logout", AuthController.logOut);

export default router;
