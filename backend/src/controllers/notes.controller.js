import NotesService from '../services/notes.service';

class NotesController {
	constructor() {
		this.service = new NotesService();
	}

	async getNotes(req, res) {}

	async getNoteById(req, res) {}

	async postNote(req, res) {}

	async putNote(req, res) {}

	async deleteNote(req, res) {}
}

export default NotesController;
