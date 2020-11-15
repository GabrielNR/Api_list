const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json({ message: 'hello world' })
});

app.listen(3333)