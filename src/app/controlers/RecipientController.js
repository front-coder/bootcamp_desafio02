import User from '../models/Recipient';

class RecipientController {
	async store(req, res) {
		const {
			id,
			name,
			address,
			number,
			complement,
			state,
			city,
			zipcode,
		} = await User.create(req.body);

		return res.json({
			id,
			name,
			address,
			number,
			complement,
			state,
			city,
			zipcode,
		});
	}
}

export default new RecipientController();
