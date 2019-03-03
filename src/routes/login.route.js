const express = require('express')

const router = express.Router()
const QRCode = require('qrcode')


router.get('/', (req, res) => {
  QRCode.toDataURL('www.youtube.com').then((result) => {
    console.log(result)
    res.render('qrcode.ejs', { url: result })
  })
})


module.exports = router
