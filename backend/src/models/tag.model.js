import { Model, DataTypes, Sequelize } from 'sequelize';

export const TAG_TABLE = 'tags';

export const TagSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
		field: 'created_at',
		defaultValue: Sequelize.NOW,
	},
};

export class Tag extends Model {
	static associate() {}

	static config(sequelize) {
		return {
			sequelize,
			tableNAme: TAG_TABLE,
			modelName: 'Tag',
			timestamps: false,
		};
	}
}
