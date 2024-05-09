const Company = require("../models/company");

exports.createCompany = async (company) => {
    try {
        return Company.create(company);
    } catch (error) {
        console.error('Create company', error);
        throw error;
    }
}

exports.listCompany = async (req) => {
    try {
        let { page, limit } = req.query;
        page = page ? parseInt(page) : 1;
        limit = limit ? parseInt(limit) : 10;
        const skip = (page - 1) * limit;
        const records = await Company.aggregate([
            {
                $sort: { _id: -1 }
            },
            {
                $facet: {
                    data: [
                        {
                            $skip: skip
                        },
                        {
                            $limit: limit
                        }
                    ],
                    totalRecords: [{ $count: "total" }, { $addFields: { page } }]
                }
            }
        ])
        return {
            list: records[0]?.data,
            pagination: records[0]?.totalRecords
        }
    } catch (error) {
        console.error('Create company', error);
        throw error;
    }
}

exports.uploadLogo = async (req) => {
    try {
        const { companyId } = req.params;
        const { originalname, mimetype, buffer } = req.file;
        return Company.updateOne({ _id: companyId }, {
            $set: {
                logo: {
                    data: buffer,
                    contentType: mimetype,
                    name: originalname
                }
            }
        })
    } catch (error) {
        throw error;
    }
}
