import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  stocks: [
    {
      stockSymbol: { type: String, required: true },
      shares: { type: Number, required: true },
      averagePrice: { type: Number, required: true },
    },
  ],
  totalValue: {
    type: Number,
    default: 0, // This will be calculated based on stocks
  },
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
