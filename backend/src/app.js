import express from 'express';
import router from './routes/index.routes.js';

const app = express();
const PORT = 3000;

// Server
const server = app.listen(PORT, () => {
	console.log(`Servidor desde puerto: ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});

// Router
app.use('/api', router);
