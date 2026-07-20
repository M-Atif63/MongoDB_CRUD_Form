import express from 'express'
import morgan from 'morgan'
import dotenv from "dotenv"
import { connectDB } from './utiles/database.js'
import router from './routes/student.Routes.js'
dotenv.config()
const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

connectDB()

app.use(router)


const port = process.env.PORT
app.listen(port,()=>{
    console.log("server connected on " + port)
})