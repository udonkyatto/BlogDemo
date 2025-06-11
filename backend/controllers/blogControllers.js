import blogModel from "../models/BlogModel.js";

const addBlog = async (req, res) => {
    const blog = new blogModel({
        title: req.body.title,
        description: req.body.description,
        title: req.body.title,
        date: req.body.date,
        category: req.body.category,
        linksrc: req.body.linksrc
    })
    try {
        await blog.save()
        console.log(req._id)
        res.json({ success: true, message: "blog added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "blog error" })
    }
}

const removeBlog = async (req, res) => {
    try {
        const food = await blogModel.findById(req.body.id)
        await foodModel.findByIdAndDelete(req.body.id)
    } catch {

    }
}

const listBlog = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        res.json({ 
            success: true, 
            data: blogs  // 确保返回的数据结构是 { data: [...] }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addBlog, removeBlog, listBlog }