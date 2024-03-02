import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/authRoutes.js"
import connectToDB from "./db/connectToDB.js"
import messageRoutes from "./routes/messageRoutes.js"
import protectRoute from "./middleware/protectRoute.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.use("/api/messages", protectRoute, messageRoutes)

app.use('/api/users', userRoutes)




app.listen(PORT, async () => {
    await connectToDB()
    console.log("listening on PORT "+PORT)
})