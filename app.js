const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rsiRoutes = require('./routes/rsi');
const companyRoutes = require('./routes/companies');
const branchRoutes = require('./routes/branches');
const indexRoutes = require('./routes/index');

// Create Express app
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRoutes);
app.use('/api/rsi', rsiRoutes);
app.use('/api/branches', branchRoutes);
app.use('/api/companies', companyRoutes);

module.exports = app;