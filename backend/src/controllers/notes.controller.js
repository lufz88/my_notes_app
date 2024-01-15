import NotesService from '../services/notes.service.js';
const service = new NotesService();

class NotesController {
	constructor() {}

	async getNotes(req, res) {
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

	async getNoteById(req, res) {}

	async postNote(req, res) {
		try {
			const { content, tags } = req.body;
		} catch (e) {
			res.status(500).send({ status: 500, message: e });
		}
	}

	async putNote(req, res) {}

	async deleteNote(req, res) {}
}

export default NotesController;
