const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const Company = require('./api/models/CompanyListModel');
const cors = require('cors');


mongoose.connect('mongodb://127.0.0.1:27017/WorkRegister');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());



const companyRouter = require('./api/routes/companyRoutes');
app.use('/', companyRouter);

const numberOfAgreementRouter = require('./api/routes/numberOfAgreementRoutes');
app.use('/', numberOfAgreementRouter);

const officeRouter = require('./api/routes/officeRoutes');
app.use('/', officeRouter);


app.listen(8080, function() {
    console.log('Serwer WorkRegister działa');
});