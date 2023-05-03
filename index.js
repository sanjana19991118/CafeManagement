const express = require('express')
const app = express()
const cors = require('cors')
const configDB = require('../CafeOrderManagement/config/database')
const router = require('../CafeOrderManagement/config/routes')
const PORT = 3058

app.use(express.json())
app.use(cors())

configDB()
app.use(router)

app.listen(PORT, () => {
    console.log('listening to the server', PORT)
})