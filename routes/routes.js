const express = require('express');
const app = express();

const API_VERSION = 'api';

app.use(`/${API_VERSION}/pacientes`, require('./paciente'));
app.use(`/${API_VERSION}/albums`, require('./albums'));

module.exports = app;