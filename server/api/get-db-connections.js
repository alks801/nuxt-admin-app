const express =  require('express')
const Router = express.Router;
const db = require('../db')
const router = Router()

router.get('/get-db-connections', function(req, res, next) {
  let result = db.getDbConnections()
  res.json(result)
})

module.exports = router