import { addBlog, removeBlog, listBlog } from "../controllers/blogControllers.js";
import express from "express"

const blogRouter = express.Router()

blogRouter.post("/add",addBlog)
blogRouter.delete("/remove",removeBlog)
blogRouter.get("/list",listBlog)

export default blogRouter
