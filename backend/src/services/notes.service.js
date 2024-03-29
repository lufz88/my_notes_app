import sequelize from '../libs/sequelize.js';

const model = sequelize.models.Note;
const noteTagModel = sequelize.models.NoteTag;
class NotesService {
	constructor() {}

	async find() {
		const data = await model.findAll({ include: ['tags'] });
		return data;
	}

	async create(data) {
		const newNote = await model.create(data);
		return newNote;
	}

	async addTag(data) {
		const newTag = await noteTagModel.create(data);
		return newTag;
	}

	async findOne(id) {
		const note = await model.findByPk(id, {
			include: ['tags'],
		});
		return note;
	}

	async update(id, changes) {
		const note = await this.findOne(id);
		const res = await note.update(changes);
		return res;
	}

	async delete(id) {
		await noteTagModel.destroy({ where: { noteId: id } });
		const note = await this.findOne(id);
		await note.destroy();
		return id;
	}
}

export default NotesService;
