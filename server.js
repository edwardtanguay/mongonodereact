import config from './config';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.get('/', (req, res) => {
	res.render('index', {
		content: '...' 
	});
	});

server.use(express.static('public'));

server.listen(config.port, () => {
	console.info('Express listening on port', config.port);
});

