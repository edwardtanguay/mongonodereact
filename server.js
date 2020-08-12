import config from './config';
import express from 'express';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';

const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(sassMiddleWare({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));


server.get('/', (req, res) => {
	res.render('index', {
		content: '...'
	});
});

server.use(express.static('public'));

server.listen(config.port, () => {
	console.info('Express listening on port', config.port);
});

