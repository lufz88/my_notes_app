import { Sequelize } from 'sequelize';
import setupModels from '../models/index.js';
import config from '../../config/config.js';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

console.log(config.dbHost, config.dbPort);
const sequelize = new Sequelize(URI, {
	dialect: 'postgres',
	logging: true,
});

setupModels(sequelize);
sequelize.sync();

export default sequelize;
