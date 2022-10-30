require('express-async-errors');
const express = require('express');
const errorMiddleware = require('./middlewares/error.middleware');
const loginRouter = require('./routers/login.routes');

const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use('/login', loginRouter);

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
