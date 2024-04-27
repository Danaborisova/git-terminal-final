const express = require('express');

const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');

// Слушаем порт 3000
const PORT = 3000;
const app = express();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    mainRoute,
    gamesRouter
);

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})
