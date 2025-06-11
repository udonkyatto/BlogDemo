import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Title is required"], // 必填，否则报错 "Title is required"
        trim: true, // 自动去除首尾空格
        minLength: [1, "Title cannot be empty"], // 最小长度 1，避免空字符串
    },
    description: { 
        type: String, 
        required: false, // 非必填
    },
    linksrc: { 
        type: String, 
        required: [true, "Link URL is required"], // 必填
        validate: {
            validator: (url) => {
                // 简单校验是否是合法 URL（可选）
                return url.startsWith("http://") || url.startsWith("https://");
            },
            message: "Invalid URL format (must start with http:// or https://)",
        },
    },
    date: {
        type: Date,
        default: Date.now, // 默认当前时间
    },
    category: {
        type: String,
        required: [true, "Category is required"],
    },
});

const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema);
export default blogModel;