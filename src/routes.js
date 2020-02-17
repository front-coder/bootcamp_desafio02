import { Router } from 'express';

import UserController from './app/controlers/UserController';
import SessionController from './app/controlers/SessionController';
import RecipientController from './app/controlers/RecipientController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/* routes.get('/', async (req, res) => {
	const user = await User.create({
		name: 'Alex Mac',
		email: 'alexmac1@gmail.com',
		password_hash: '123456789',
	});

	return res.json(user);
}); */

routes.get('/', (req, res) => {
	return res.json({ message: 'FastFeet' });
});

// Users
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

// Recipients
routes.post('/recipients', RecipientController.store);

export default routes;
