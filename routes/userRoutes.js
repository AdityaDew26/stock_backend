// routes/authRoutes.js
import express from 'express';
import { signup, login, getUser, updateUser } from '../controller/userController.js'; 
import authenticateUser from '../middleware/authMiddleware.js'; 
const router = express.Router();

// User Signup and Login Routes
router.post('/signup', signup);
router.post('/login', login);

// Protected Routes - User Profile
router.get('/getUser', authenticateUser, getUser);
router.put('/updateUser', authenticateUser, updateUser);

export default router;
