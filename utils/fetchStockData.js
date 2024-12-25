import axios from 'axios';

const fetchStockData = async (symbol) => {
  try {
    const response = await axios.get(`https://api.example.com/stocks/${symbol}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching stock data');
  }
};

export default fetchStockData;
