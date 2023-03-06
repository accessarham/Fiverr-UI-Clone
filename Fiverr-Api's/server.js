import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.log(error);
    }
}

app.use('/api/conversations', conversationRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/messages', messageRoute);
app.use('/api/orders', orderRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/users', userRoute);

app.listen(8800, () => {
    connect();
    console.log('Backend server is running!');
})