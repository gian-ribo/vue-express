const express = require('express')
const { PORT } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const bucketListItemRoutes = require('./routes/api/bucketListItems')

const app = express()

app
	.use(cors())
	.use(morgan('tiny'))
	.use(bodyParser.json())
	.use('/api/bucketListItems', bucketListItemRoutes)
	.get('/', (req, res) => res.send('Hello world!'))
	.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))