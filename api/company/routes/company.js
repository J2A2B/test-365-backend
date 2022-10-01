const express = require('express')
const router = express.Router()
const companyController = require('../controllers/company')

router.get('/company/find/:id', companyController.findCompany)
module.exports = router