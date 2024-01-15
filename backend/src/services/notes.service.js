import sequelize from '../libs/sequelize.js';

const model = sequelize.models.Note;
class NotesService {
	constructor() {}

	async find() {
		const data = await model.findAll();
		return data;
	}

	async create(data) {
		const newNote = await model.create(data);
		return newNote;
	}

	async findOne(id) {
		const note = await model.findByPk(id);
		return note;
	}

	async update(id, changes) {
		const note = await this.findOne(id);
		const res = await note.update(changes);
		return res;
	}

	async delete(id) {
		const note = await this.findOne(id);
		await note.destroy();
		return id;
	}
}

export default NotesService;
