import React, { useContext, useState } from 'react';
import "./Display.css";
import { BlogCard } from '../BlogCard/BlogCard.jsx';
import { TimeLine } from '../TimeLine/TimeLine.jsx';
import { StoreContext } from '../context/blogContext.jsx';

export const Display = ({ category, setCategory }) => {
    const { blog_list } = useContext(StoreContext);
    const [selectedDate, setSelectedDate] = useState(null); // 改为按天选择

    // 提取所有博客的日期
    const dates = blog_list.map(item => item.date);

    // 根据 category 和 selectedDate 过滤博客
    const filteredBlogs = blog_list.filter(item => {
        const matchesCategory = category === "All" || category === item.category;
        const matchesDate = !selectedDate || 
            new Date(item.date).toISOString().slice(0, 10) === selectedDate;
        return matchesCategory && matchesDate;
    });

    return (
        <div className="display-container">
            <div className="time-line">
                <TimeLine
                    dates={dates}
                    selectedDate={selectedDate}  // 传递当前选中日期
                    onSelectDate={setSelectedDate}  // 传递日期选择函数
                />
            </div>

            <div className="display-blogs">
                {filteredBlogs.map((item, index) => (
                    <BlogCard
                        key={index}
                        id={item._id}
                        title={item.title}
                        description={item.description}
                        date={item.date}
                        category={item.category}
                        onCategoryClick={setCategory}  // 传递点击处理函数
                        isSelected={category === item.category}  // 传递是否选中状态
                    />
                ))}
            </div>
        </div>
    );
};
