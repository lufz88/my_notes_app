import { NoteTag, NoteTagSchema } from './note-tag.model.js';
import { Note, NoteSchema } from './note.model.js';
import { Tag, TagSchema } from './tag.model.js';

function setupModels(sequelize) {
	Note.init(NoteSchema, Note.config(sequelize));
	Tag.init(TagSchema, Tag.config(sequelize));
	NoteTag.init(NoteTagSchema, NoteTag.config(sequelize));

	Note.associate(sequelize.models);
}

export default setupModels;
