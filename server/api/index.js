const express = require('express')
const Router = express.Router;
const db = require('../db')

const router = Router()

router.get('/get-settings', async function (req, res, next) {
  let result = await db.getInternalSettings()
  console.log(result)
  res.json(result)
})

router.get('/get-common-settings', async function (req, res, next) {
  let result = await db.getCommonSettings()
  console.log(result)
  res.json(result)
})

router.get('/get-dynamic-collections', async function (req, res, next) {
  let result = await db.getDynamicConnections()
  console.log(result)
  res.json(result)
})

router.get('/get-api-keys', async function (req, res, next) {
  let result = await db.getAPIKeys()
  console.log(result)
  res.json(result)
})

router.get('/get-api-status-messages', async function (req, res, next) {
  let result = await db.getAPIReturnStatuses()
  console.log(result)
  res.json(result)
})

router.get('/get-channel-room-types', async function (req, res, next) {
  let result = await db.getChannelRoomTypes()
  console.log(result)
  res.json(result)
})

router.get('/get-channel-rate-codes', async function (req, res, next) {
  let result = await db.getChannelRates()
  console.log(result)
  res.json(result)
})

router.post('/admin-signin', function (req, res, next) {
  //let logins = await db.getPanelUsers()
  let login = req.body.login
  let pass = req.body.pass
  let isOk = false;
  if (login == '1' && pass == '2') {
    isOk = true;
  }
  res.json(isOk)
})
router.get('/get-admin-panel-users', async function (req, res, next) {
  let result = await db.getPanelUsers()
  console.log(result)
  res.json(result)
})

// router.use(getDbConnections)
// router.use(adminSignIn)

module.exports = router
