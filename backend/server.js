import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRoutes from "./routes/authRoutes.js"
import connectToDB from "./db/connectToDB.js"
import messageRoutes from "./routes/messageRoutes.js"
import protectRoute from "./middleware/protectRoute.js"
import userRoutes from "./routes/userRoutes.js"


dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cookieParser())
app.use(express.json())
app.options(cors())


var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}


app.use("/api/auth", cors(corsOptions) , authRoutes)

app.use("/api/messages", cors(corsOptions), protectRoute, messageRoutes)

app.use('/api/users', cors(corsOptions), userRoutes)




app.listen(PORT, async () => {
    await connectToDB()
    console.log("listening on PORT "+PORT)
})