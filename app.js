var express = require('express');
var app = express();
const connectDB = require('./utils/connectDB');
const companyController = require('./controller/company.controller');
const upload = require('./utils/fileUpload');
const { createValidator } = require('./middleware/validateRegistration');
const { validationResult } = require('express-validator');

app.use(express.json());

connectDB();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/company', async function (req, res) {
    const result = await companyController.listCompany(req, res);
    res.send({ data: result });
});

app.post('/company', createValidator, async function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const result = await companyController.createCompany(req, res);
        res.send({ data: result, message: "Details saved" });
    }
    res.status(422).json({ errors: errors.array() })
});

app.post('/upload', upload.single('file'), function (req, res) {
    res.send({ data: result, message: "Details saved" });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
