import { Router } from 'express';
import UserController from './app/controlers/UserController';
import RecipientController from './app/controlers/RecipientController';

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

// Recipients
routes.post('/recipients', RecipientController.store);

export default routes;
