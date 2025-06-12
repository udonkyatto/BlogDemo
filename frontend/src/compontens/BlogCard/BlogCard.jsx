import React from 'react'
import "./BlogCard.css"

export const BlogCard = ({ title, description, category, onCategoryClick, isSelected, linksrc }) => {
    // 判断是否有数据传入
    const hasData = title || description || category;
    
    // 默认卡片数据
    const defaultCard = {
        title: "项目后端地址",
        description: "点击跳转后端,实现前端数据读取Demo",
        category: "work",
        linksrc: "https://example.com/api" // 你可以设置一个真实的默认链接
    };

    // 使用数据或默认值
    const displayData = hasData ? 
        { title, description, category, linksrc } : 
        defaultCard;

    return (
        <div className='card-container'>
            <div className="title-line">
                <h3
                    onClick={() => {
                        if (displayData.linksrc) window.location.href = displayData.linksrc;
                    }}
                    style={{ cursor: displayData.linksrc ? 'pointer' : 'default' }}
                >
                    {displayData.title}
                </h3>
                <h5
                    onClick={(e) => {
                        e.stopPropagation();
                        if (onCategoryClick) onCategoryClick(displayData.category);
                    }}
                    className={isSelected ? 'selected' : ''}
                    style={{ cursor: 'pointer' }}
                >
                    #{displayData.category}
                </h5>
            </div>
            <span>{displayData.description}</span>
        </div>
    );
};