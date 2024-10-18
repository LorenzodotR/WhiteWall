import express from 'express';

const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('All Chats');
});

app.get('/login', (req, res) => {
    res.send('Login');
});

app.get('/contato/:id', (req, res) => {
    res.send(`Contato ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});