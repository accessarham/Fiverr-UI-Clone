import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema({
    conversationId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model("Message", messageSchema);