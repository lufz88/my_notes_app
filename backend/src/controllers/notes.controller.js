import NotesService from '../services/notes.service.js';
import TagsService from '../services/tags.service.js';
const notesService = new NotesService();
const tagsService = new TagsService();

class NotesController {
	constructor() {}

	async getNotes(req, res) {
		try {
			const data = await notesService.find();
			if (data.length >= 1) {
				res.status(200).send({ status: 200, data: data });
			} else {
				res.status(404).send({ status: 404, message: 'Not Found' });
			}
		} catch (e) {
			res.status(500).send({ status: 500, message: e });
		}
	}

	async getNoteById(req, res) {
		try {
			const { id } = req.params;
			const data = await notesService.findOne(id);
			if (data) {
				res.status(200).send({ status: 200, data: data });
			} else {
				res.status(404).send({ status: 404, message: 'Not Found' });
			}
		} catch (e) {
			res.status(500).send({ status: 500, message: e });
		}
	}

	async postNote(req, res) {
		try {
			const { content, tags } = req.body;
			const newNote = await notesService.create({ content });
			const dbTags = await tagsService.find();
			if (tags.length >= 1) {
				for (let i = 0; i < tags.length; i++) {
					const tag = dbTags.find(tag => tag.dataValues.name === tags[i]);
					const tagId = tag.id;
					const noteId = newNote.id;
					await notesService.addTag({ tagId, noteId });
				}
			}
			res.status(201).send({ status: 201, message: 'Note created', data: newNote });
		} catch (e) {
			res.status(500).send({ status: 500, message: e });
		}
	}

	async patchNote(req, res) {
		try {
			const { id } = req.params;
			const changes = req.body;
			console.log(id, changes);
			const updateNote = await notesService.update(id, changes);

			res.status(201).send({ status: 201, message: 'Note updated', data: updateNote });
		} catch (e) {
			res.status(500).send({ status: 500, message: e });
		}
	}

	async deleteNote(req, res) {
		try {
			const { id } = req.params;
			const data = await notesService.delete(id);
			if (data) {
				res.status(200).send({ status: 200, data: data });
			} else {
				res.status(404).send({ status: 404, message: 'Not Found' });
			}
		} catch (e) {
			res.status(500).send({ status: 500, message: e });
		}
	}
}

export default NotesController;
