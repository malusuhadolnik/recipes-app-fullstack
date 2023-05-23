const express = require('express');
require('dotenv').config()
const cors = require('cors');
const routes = require('./Routes');
const errorHandler = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

app.use('/meals', routes.mealsRoute);

app.use('/drinks', routes.drinksRoute);

app.use(errorHandler);

app.listen(PORT)
