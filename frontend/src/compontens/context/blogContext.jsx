import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const BlogContextProvider = (props) => {
    const [blogList, setBlogList] = useState([]);
    const url = "http://localhost:4000";

    const fetchBlogList = async () => {
        try {
            const response = await axios.get(`${url}/blogs/list`);
            setBlogList(response.data.data || []);  // 确保数据不为null
        } catch (error) {
            console.error("Failed to fetch blog list:", error);
            setBlogList([]);  // 出错时设为空数组
        }
    };

    useEffect(() => {
        fetchBlogList();
    }, []);

    // 正确定义 contextValue
    const contextValue = {
        blog_list: blogList,  // 确保属性名和前端使用的一致
        fetchBlogList
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default BlogContextProvider;