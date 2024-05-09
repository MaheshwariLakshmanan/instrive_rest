const { body } = require('express-validator');

const createValidator = [
    body('name', 'Name is mandatory').not().isEmpty(),
    body('address', 'Address is mandatory').not().isEmpty(),
    body('country', 'Country is mandatory').not().isEmpty(),
    body('postalCode', 'Postal Code is mandatory').not().isEmpty(),
    body('postalCode', 'Postal Code is mandatory').isNumeric(),

    body('city', 'City is mandatory').not().isEmpty(),
    body('countryCode', 'Country Code is mandatory').not().isEmpty(),
    body('contactNo', 'Contact Number is mandatory').not().isEmpty(),
    body('profile', 'Profile is mandatory').not().isEmpty(),

    body('contactPerson.name', 'Key contact person name is Mandatory').not().isEmpty(),
    body('contactPerson.designation', 'Key contact person designation is Mandatory').not().isEmpty(),
    body('contactPerson.countryCode', 'Key contact person country code is Mandatory').not().isEmpty(),
    body('contactPerson.contactNo', 'Key contact person contact number is Mandatory').not().isEmpty(),
    body('contactPerson.email', 'Key contact person name is Mandatory').not().isEmpty(),
    body('contactPerson.email', 'Invalid Key contact person email').isEmail(),

    body('product.name', 'Product name is Mandatory').not().isEmpty(),
    body('product.description', 'Product description is Mandatory').not().isEmpty(),
];

module.exports = { createValidator };
