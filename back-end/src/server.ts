import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('All Chats');
});

app.get('/login', (req, res) => {
    res.send('Login');
});

app.get('/contato/:id', (req, res) => {
    res.send(`Contato ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});