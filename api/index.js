
import express from 'express';
const server = express();

server.get('/', (req, res) => {
	res.send({ data: [111, 222, 333] });
});

