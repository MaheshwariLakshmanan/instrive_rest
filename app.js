var express = require('express');
var app = express();
const connectDB = require('./utils/connectDB');
const companyController = require('./controller/company.controller');
const { createValidator } = require('./middleware/validateRegistration');
const { validationResult } = require('express-validator');
const multer = require('multer');

app.use(express.json());

connectDB();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/company', async function (req, res) {
    const result = await companyController.listCompany(req, res);
    res.status(200).json({ data: result });
});

app.post('/company', createValidator, async function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        const result = await companyController.createCompany(req, res);
        res.status(201).json({ data: result, message: "Details saved" });
    }
    res.status(422).json({ errors: errors.array() })
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.put('/upload/:companyId', upload.single('file'), async function (req, res) {
    await companyController.uploadLogo(req, res);
    res.status(200).json({ message: "File uploaded successfully" });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
