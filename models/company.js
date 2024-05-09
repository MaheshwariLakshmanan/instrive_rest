const {
    Schema,
    model
} = require("mongoose");

const KeyContactPerson = new Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const MemberSchema = new Schema({
    name: {
        type: String,
    },
    designation: {
        type: String,
    },
    summary: {
        type: String,
    },
    linkedIn: {
        type: String
    }
});

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    socialLink: {
        type: String,
    }
});

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    logo: {
        data: Buffer,
        contentType: String,
        name: String
    },
    address: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    countryCode: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    website: String,
    contactPerson: KeyContactPerson,
    profile: {
        type: String,
        required: true,
        max: [200, "Max characters of profile summary is 200"]
    },
    socialLink: String,
    vision: {
        type: String,
        max: [200, "Max characters of vision is 200"]
    },
    members: [MemberSchema],
    products: [ProductSchema],
});

const Company = model("company", CompanySchema)

module.exports = Company
