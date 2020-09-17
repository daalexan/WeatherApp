const express = require('express');

const app = express();

app.use(express.static('./dist/WeatherApp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/WeatherApp/'}),
);

app.listen(process.env.PORT || 8080);