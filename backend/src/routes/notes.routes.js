import { Router } from 'express';
import NotesController from '../controllers/notes.controller.js';
import NotesService from '../services/notes.service.js';

const routerNotes = Router();
const controller = new NotesController();

routerNotes.get('/', controller.getNotes);
routerNotes.get('/:id', controller.getNoteById);
routerNotes.post('/', controller.postNote);
routerNotes.patch('/:id', controller.patchNote);
routerNotes.delete('/:id', controller.deleteNote);

export default routerNotes;
