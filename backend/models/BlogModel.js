import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: {
        type: Date,
        default: () => new Date(new Date().getFullYear(), new Date().getMonth(), 1), 
        required: false      // 不是必须的，因为有默认值
    },
    category: { 
        type: String,
        required: true,
    }
})

const blogModel = mongoose.model.blog || mongoose.model("blog", blogSchema)
export default blogModel 