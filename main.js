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
app.use('/workRegister', authHelper, companyRouter);

const numberOfAgreementRouter = require('./api/routes/numberOfAgreementRoutes');
app.use('/workRegister', authHelper, numberOfAgreementRouter);

const officeRouter = require('./api/routes/officeRoutes');
app.use('/workRegister', authHelper, officeRouter);

const principalRouter = require('./api/routes/principalRoutes');
app.use('/workRegister', authHelper, principalRouter);

const coordinatingRouter = require('./api/routes/coordinatingRoutes');
app.use('/workRegister', authHelper, coordinatingRouter);

const coordinatorRouter = require('./api/routes/coordinatorRoutes');
app.use('/workRegister', authHelper, coordinatorRouter);

const allowerRouter = require('./api/routes/allowerRoutes');
app.use('/workRegister', authHelper, allowerRouter);

const managerRouter = require('./api/routes/managerRoutes');
app.use('/workRegister', authHelper, managerRouter);

const supervisorRouter = require('./api/routes/supervisorRoutes');
app.use('/workRegister', authHelper, supervisorRouter);

const workOrderRouter = require('./api/routes/workOrderRoutes');
app.use('/workOrder', authHelper, workOrderRouter);

const teamMember = require('./api/routes/teamMemberRoutes');
app.use('/teamMember', authHelper, teamMember);

const userRouter = require('./api/routes/userRoutes');
app.use('/user', userRouter);


app.listen(8080, function() {
    console.log('Serwer WorkRegister działa');
});