import TagsService from '../services/tags.service.js';

const service = new TagsService();
class TagsController {
	constructor() {}

	async getTags(req, res) {
		try {
			const data = await service.find();
			if (data) {
				res.status(200).send({ status: 200, data: data });
			} else {
				res.status(404).send({ status: 404, message: 'Not Found' });
			}
		} catch (e) {
			res.status(500).send({ status: 500, message: e });
		}
	}

	async getTagById(req, res) {}

	async postTag(req, res) {
		try {
			const { name } = req.body;
			const tag = await service.create(name);
			res.status(200).send({ status: 200, data: tag });
		} catch (e) {
			res.status(500).send({ status: 500, message: e });
		}
	}

	async putTag(req, res) {}

	async deleteTag(req, res) {}
}

export default TagsController;
