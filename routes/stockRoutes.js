import express from "express"
import { getStockData, addStock } from "../controller/stockController.js";

const router = express()

router.get('/getStockData', getStockData);

// Route to add a new stock
router.post('/addStockData', addStock);

export default router;