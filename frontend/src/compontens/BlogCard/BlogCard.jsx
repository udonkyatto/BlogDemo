import React from 'react'
import "./BlogCard.css"

export const BlogCard = ({ title, description, category, onCategoryClick, isSelected, linksrc }) => {
    return (
        <div className='card-container'>
            <h3
                onClick={() => {
                    // 点击标题时跳转到 linksrc
                    window.location.href = linksrc;
                }}
                style={{ cursor: 'pointer' }}  // 添加指针样式，表示可点击
            >{title} </h3>
            <h5
                onClick={(e) => {
                    e.stopPropagation();
                    onCategoryClick(category);
                }}
                className={isSelected ? 'selected' : ''}
                style={{ cursor: 'pointer' }}
            >
                #{category}
            </h5>
            <span>{description}</span>
        </div>
    )
}