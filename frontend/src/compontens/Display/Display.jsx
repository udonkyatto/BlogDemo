import React, { useContext, useState } from 'react';
import "./Display.css";
import { BlogCard } from '../BlogCard/BlogCard.jsx';
import { TimeLine } from '../TimeLine/TimeLine.jsx';
import { StoreContext } from '../context/blogContext.jsx';

export const Display = () => {
    const { blog_list } = useContext(StoreContext);
    const [selectedYearMonth, setSelectedYearMonth] = useState("All");

    // 获取去重且排序后的年月列表
    const uniqueYearMonths = blog_list
        .map(item => {
            const dateObj = new Date(item.date);
            return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
        })
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => b.localeCompare(a));

    // 过滤显示的博客列表
    const filteredBlogs = selectedYearMonth === "All" 
        ? blog_list 
        : blog_list.filter(item => {
            const dateObj = new Date(item.date);
            const itemYearMonth = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
            return itemYearMonth === selectedYearMonth;
        });

    return (
        <div className="display-container">
            <div className="time-line">
                {uniqueYearMonths.map((yearMonth, index) => (
                    <a
                        key={index}
                        onClick={() => setSelectedYearMonth(yearMonth)}
                        style={{ cursor: 'pointer', marginRight: '10px' }}
                    >
                        {yearMonth}
                    </a>
                ))}
            </div>
            
            <div className="display-blogs">
                {filteredBlogs.map((item, index) => (
                    <BlogCard 
                        key={index} 
                        id={item._id} 
                        title={item.title} 
                        description={item.description} 
                        date={item.date} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    );
};