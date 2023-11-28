import { Router } from "express";
import { getFile } from "../controllers/upload.controller";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };