import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to DB")
    } catch(e) {
        console.log(e)
    }
}

export default connectToDB;