import { Router } from 'express';
import TagsController from '../controllers/tags.controller.js';

const routerTags = Router();
const controller = new TagsController();

routerTags.get('/', controller.getTags);
routerTags.get('/:id', controller.getTagById);
routerTags.post('/', controller.postTag);
routerTags.delete('/:id', controller.deleteTag);

export default routerTags;
