const express =  require('express')
const Router = express.Router;
const getDbConnections = require('./get-db-connections')

const router = Router()

router.use(getDbConnections)

module.exports = router