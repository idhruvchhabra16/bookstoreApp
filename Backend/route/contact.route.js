import express from "express";
import { getQuery } from "../controller/contact.controller.js";

const router = express.Router();

router.post('/', getQuery);

export default router;
