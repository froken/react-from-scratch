import express from 'express';
import config from './config';

const app = express();
app.set('view engine', 'ejs');

app.use('/', express.static('public', { index: false }));
app.get('/*', (req, res) => {
    res.render('./index', {req, res});
});

app.listen(config.port, function listen() {
    console.log(`Listening on ${config.port}`);
});
