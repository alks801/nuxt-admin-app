const express = require('express')
const Router = express.Router;
const db = require('../db')

const router = Router()

//GET ROUTES
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

router.post('/admin-signin', async function (req, res, next) {
    let isOk = await db.CheckAdminAuth(req.body);
//   let isOk = await db.getPanelUsers(req.body)
//   let login = req.body.login
//   let pass = req.body.pass
//   let isOk = false;
//   if (login == '1' && pass == '2') {
//     isOk = true;
//   }
  res.json(isOk)
})
router.get('/get-admin-panel-users', async function (req, res, next) {
  let result = await db.getPanelUsers()
  console.log(result)
  res.json(result)
})

//UPDATE ROUTES
router.post('/post-settings', async function (req, res, next) {
  let body = req.body
  let result = await db.upsertSettings(body)
  res.json(result)
})

router.post('/post-common-settings', async function (req, res, next) {
  let body = req.body
  let result = await db.upsertCommonSettings(body)
  res.json(result)
})

router.post('/post-dynamic-collections', async function (req, res, next) {
  let body = req.body
  let result = await db.upsertDynamicConnections(body)
  res.json(result)
})

router.post('/post-api-keys', async function (req, res, next) {
  let body = req.body
  let result = await db.upsertAPIKeys(body)
  res.json(result)
})

router.post('/post-api-status-messages', async function (req, res, next) {
  let body = req.body
  let result = await db.upsertAPIReturnStatuses(body)
  res.json(result)
})

router.post('/post-channel-room-types', async function (req, res, next) {
  let body = req.body
  let result = await db.upsertChannelRoomTypes(body)
  res.json(result)
})

router.post('/post-channel-rate-codes', async function (req, res, next) {
  let body = req.body
  let result = await db.upsertChannelRates(body)
  res.json(result)
})

router.post('/post-admin-panel-users', async function (req, res, next) {
  let body = req.body
  let result = await db.upsertPanelUsers(body)
  res.json(result)
})

module.exports = router
