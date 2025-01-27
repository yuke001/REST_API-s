import express from 'express'
import db from "./config/db.js"
import empRouter from "./routes/empRoutes.js"

let app = express()

db;

app.use(express.json())

app.use("/api/emp", empRouter) ;

export default app ;






// app.use("/api/v1/emp" ,empRouter )