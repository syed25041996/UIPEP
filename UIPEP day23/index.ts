const express = require('express')
const path = require('path')
const loggers = require('./middleware/logger')
const app = express()


const PORT = 5000


//Init middleware
// app.use(loggers)
app.use('/api/members/', require('./routes/api/members'))

// app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})