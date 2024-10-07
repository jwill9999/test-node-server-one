import { Router } from 'express';
import homeRoute from '../routes/index';
import  usersRoutess from '../routes/users';

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/', homeRoute);
router.use('/users', usersRoutess);

export default router;