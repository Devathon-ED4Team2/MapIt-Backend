// Node modules
import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'

// Import API
import apiRouter from './api.routes.js'

import * as mongodb from './db.js'

dotenv.config()

// Initialization
const app = express()

// Settings
const port = process.env.SERVER_PORT || 3000

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

await mongodb.connectDB()

app.use(('/'), express.static('public', { redirect: false }))

// Routes
apiRouter(app)

// Start Server
app.listen(port, () => {
  console.log(`Server on port ${port}`)
})
