const companyService = require("../service/company.service");

exports.createCompany = async (req, res) => {
    try {
        return companyService.createCompany(req.body);
    } catch (error) {
        console.error('Create company', error);
        throw error;
    }
}

exports.listCompany = async (req, res) => {
    try {
        return companyService.listCompany(req);
    } catch (error) {
        console.error('Create company', error);
        throw error;
    }
}

exports.uploadLogo = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        return companyService.uploadLogo(req);

    } catch (error) {
        console.error('Upload logo', error);
        throw error;
    }
}
