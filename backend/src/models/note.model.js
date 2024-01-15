import { Model, DataTypes, Sequelize } from 'sequelize';

export const NOTE_TABLE = 'notes';

export const NoteSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	content: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	active: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
		defaultValue: true,
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: 'created_at',
		defaultValue: Sequelize.NOW,
	},
};

export class Note extends Model {
	static associate(models) {
		this.belongsToMany(models.Tag, {
			as: 'tags',
			through: models.NoteTag,
			foreignKey: 'noteId',
			otherKey: 'tagId',
		});
	}

	static config(sequelize) {
		return {
			sequelize,
			tableNAme: NOTE_TABLE,
			modelName: 'Note',
			timestamps: false,
		};
	}
}
