const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
// const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://127.0.0.1:27017/WorkRegister');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

// app.use(cookieParser());

const authHelper = require("./api/middlewares/authHelper");

const companyRouter = require('./api/routes/companyRoutes');
// app.use('/', authHelper, companyRouter);
app.use('/', companyRouter);

const numberOfAgreementRouter = require('./api/routes/numberOfAgreementRoutes');
app.use('/', numberOfAgreementRouter);

const officeRouter = require('./api/routes/officeRoutes');
app.use('/', officeRouter);

const principalRouter = require('./api/routes/principalRoutes');
app.use('/', principalRouter);

const coordinatingRouter = require('./api/routes/coordinatingRoutes');
app.use('/', coordinatingRouter);

const coordinatorRouter = require('./api/routes/coordinatorRoutes');
app.use('/', coordinatorRouter);

const allowerRouter = require('./api/routes/allowerRoutes');
app.use('/', allowerRouter);

const managerRouter = require('./api/routes/managerRoutes');
app.use('/', managerRouter);

const supervisorRouter = require('./api/routes/supervisorRoutes');
app.use('/', supervisorRouter);

const workOrderRouter = require('./api/routes/workOrderRoutes');
app.use('/', authHelper, workOrderRouter);
// app.use('/', workOrderRouter);

const userRouter = require('./api/routes/userRoutes');
// app.use('/', authHelper, userRouter);
app.use('/', userRouter);


app.listen(8080, function() {
    console.log('Serwer WorkRegister działa');
});