import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: {
        type: Date,
        default: Date.now,  // 使用当前时间戳
        required: false
    },
    category: {
        type: String,
        required: true,
    }
})

const blogModel = mongoose.model.blog || mongoose.model("blog", blogSchema)
export default blogModel 