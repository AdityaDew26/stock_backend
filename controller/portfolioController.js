import Portfolio from "../models/Portfolio.js";


export const getPortfolio = (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      { id: 1, title: 'Project A', description: 'Description for Project A' },
      { id: 2, title: 'Project B', description: 'Description for Project B' },
    ],
  });
};


export const addPortfolioItem = async (req, res) => {
  const { stockName, quantity, price } = req.body;

  try {
    const newItem = await Portfolio.create({
      stockName,
      quantity,
      price,
    });
    
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: "Error: Unable to add portfolio item." });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); 
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

