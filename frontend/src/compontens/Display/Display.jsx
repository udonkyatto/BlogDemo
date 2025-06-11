import React, { useContext, useState } from 'react';
import "./Display.css";
import { BlogCard } from '../BlogCard/BlogCard.jsx';
import { TimeLine } from '../TimeLine/TimeLine.jsx';
import { StoreContext } from '../context/blogContext.jsx';

export const Display = ({ category, setCategory }) => {
    const { blog_list } = useContext(StoreContext);
    const [selectedDate, setSelectedDate] = useState(null);

    // 提取所有博客的日期
    const dates = blog_list.map(item => item.date);

    // 根据 category 和 selectedDate 过滤博客
    const filteredBlogs = blog_list.filter(item => {
        const matchesCategory = category === "All" || category === item.category;
        const matchesDate = !selectedDate || 
            new Date(item.date).toISOString().slice(0, 10) === selectedDate;
        return matchesCategory && matchesDate;
    });

    // 处理分类点击
    const handleCategoryClick = (clickedCategory) => {
        if (category === clickedCategory) {
            // 如果点击的是当前已选中的分类，则取消过滤
            setCategory("All");
        } else {
            // 否则过滤该分类
            setCategory(clickedCategory);
        }
    };

    return (
        <div className="display-container">
            <div className="time-line">
                <TimeLine
                    dates={dates}
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
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
                        onCategoryClick={handleCategoryClick}  // 使用新的处理函数
                        isSelected={category === item.category}
                    />
                ))}
            </div>
        </div>
    );
};