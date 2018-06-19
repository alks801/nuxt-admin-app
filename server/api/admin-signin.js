const express = require('express')
const Router = express.Router
const db = require('../db')
const router = Router()

router.post('/admin-signin', function(req, res, next) {
  let login = req.body.login
  let pass = req.body.pass
  let isOk = false;
  if (login == '1' && pass == '2') {
      isOk = true;
  }
  res.json(isOk)
})

module.exports = router
