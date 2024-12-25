import Stock from "../models/Stocks.js";

export var getStockData = async (req, res) => {
  try {
    const stocks = await Stock.find(); 
    res.json(stocks); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

export var addStock = async (req, res) => {
  const { symbol, companyName, price, volume, marketCap, sector, industry } = req.body;

  try {
    const stock = new Stock({
      symbol,
      companyName,
      price,
      volume,
      marketCap,
      sector,
      industry,
    });

    await stock.save(); // Save the stock to the database
    res.status(201).json(stock); // Send the newly added stock as a response
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle validation or saving errors
  }
};
