const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).send('Welcome form Router')
})

router.route('/about').get((req, res)=>{
    res.status(200).send('About page is Created')
})


module.exports = router