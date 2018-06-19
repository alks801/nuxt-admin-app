const express =  require('express')
const Router = express.Router;
const getDbConnections = require('./get-db-connections')
const adminSignIn = require('./admin-signin')

const router = Router()

router.use(getDbConnections)
router.use(adminSignIn)

module.exports = router