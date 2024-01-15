import express from 'express';
import router from './routes/index.routes.js';

import config from '../config/config.js';
import sequelize from './libs/sequelize.js';

const app = express();
const PORT = config.port;

// DB

sequelize.authenticate().then(() => {
	console.log('Conexión a la base de datos establecida correctamente.');
});

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Server
const server = app.listen(PORT, () => {
	console.log(`Servidor desde puerto: ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});

// Router
app.use('/api', router);
