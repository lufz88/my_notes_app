import { Model, DataTypes, Sequelize } from 'sequelize';
import { NOTE_TABLE } from './note.model.js';
import { TAG_TABLE } from './tag.model.js';

export const NOTE_TAG_TABLE = 'notes_tags';

export const NoteTagSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: 'created_at',
		defaultValue: Sequelize.NOW,
	},
	noteId: {
		field: 'note_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: NOTE_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
	tagId: {
		field: 'tag_id',
		allowNull: false,
		type: DataTypes.INTEGER,
		references: {
			model: TAG_TABLE,
			key: 'id',
		},
		onUpdate: 'CASCADE',
		onDelete: 'SET NULL',
	},
};

export class NoteTag extends Model {
	static associate() {}

	static config(sequelize) {
		return {
			sequelize,
			tableNAme: NOTE_TAG_TABLE,
			modelName: 'NoteTag',
			timestamps: false,
		};
	}
}
