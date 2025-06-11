import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import blogRoute from "./routes/blogRoutes.js"

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

connectDB()

app.use("/blogs",blogRoute)


app.listen(port,() => {
    console.log(`Server Started on http://localhost:${port}`)
})
