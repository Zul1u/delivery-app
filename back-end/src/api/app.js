require('express-async-errors');
const express = require('express');
const errorMiddleware = require('./middlewares/error.middleware');
const cors = require('cors');
const loginRouter = require('./routers/login.routes');
const userRouter = require('./routers/user.routes');
const productRouter = require('./routers/product.routes');
const saleRouter = require('./routers/sale.routes');

const app = express();

app.use(express.static('public'));

app.use(express.json());

app.use(cors());

app.use('/login', loginRouter);

app.use('/users', userRouter);

app.use('/products', productRouter);

app.use('/sales', saleRouter);

// app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorMiddleware);

module.exports = app;
