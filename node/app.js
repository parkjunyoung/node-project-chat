const express = require('express');

const app = express();
const port = 3000;


app.get('/', ( _ ,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen( port, () => {
    console.log('Express listening on port', port);
});