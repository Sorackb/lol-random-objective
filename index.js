const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const public = path.join(__dirname, 'public');

const app = express();

app.set('trust proxy', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor randômico sendo executado na porta ${server.address().port}`);
});