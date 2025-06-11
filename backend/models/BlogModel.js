import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    date: {
        type: Date,
        default: Date.now,  // 如果没有提供 date，则使用当前时间
        required: false      // 不是必须的，因为有默认值
    },
    category: { 
        type: String,
        required: true,
        enum: ["life", "work", "self"], // 限制只能选这三个值
        default: "life" // 可选：设置默认值
    }
})

const blogModel = mongoose.model.blog || mongoose.model("blog", blogSchema)
export default blogModel 