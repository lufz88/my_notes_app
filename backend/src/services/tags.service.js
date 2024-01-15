import sequelize from '../libs/sequelize.js';

const model = sequelize.models.Tag;

class TagsService {
	constructor() {}

	async find() {
		const data = await model.findAll();
		return data;
	}

	async findOne(id) {
		const tag = await model.findByPk(id);
		return tag;
	}

	async create(name) {
		const newTag = await model.create({ name });
		return newTag;
	}

	async update(id, changes) {
		const tag = await this.findOne(id);
		const res = await tag.update(changes);
		return res;
	}

	async delete(id) {
		const tag = await this.findOne(id);
		await tag.destroy();
		return id;
	}
}

export default TagsService;
