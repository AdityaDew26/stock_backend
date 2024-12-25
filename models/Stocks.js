import mongoose from "mongoose";

// Define the Stock Schema
const stockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      unique: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    volume: {
      type: Number,
      required: true,
    },
    marketCap: {
      type: Number,
      required: true,
    },
    sector: {
      type: String,
    },
    industry: {
      type: String,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Create and export the Stock model
const Stock = mongoose.model('Stock', stockSchema);

export default Stock
