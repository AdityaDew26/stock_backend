import express from "express";
import { getPortfolio, addPortfolioItem } from "../controller/portfolioController.js";

const router = express.Router();

router.get("/getPortfolio", getPortfolio);
router.post("/addPortfolio", addPortfolioItem);

export default router;
