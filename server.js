import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/portfolio', portfolioRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong, please try again later.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
