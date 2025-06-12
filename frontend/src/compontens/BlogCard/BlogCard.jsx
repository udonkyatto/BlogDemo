import React from 'react'
import "./BlogCard.css"

export const BlogCard = ({ title, description, category, onCategoryClick, isSelected, linksrc }) => {
    // 判断是否有数据传入，如果没有就显示示例卡片
    const shouldShowExample = !title && !description && !category;

    return (
        <div className='card-container'>
            {shouldShowExample ? (
                // 默认示例卡片
                <>
                    <h3>项目后端地址</h3>
                    <h5>#work</h5>
                    <span>点击跳转后端,实现前端数据读取Demo</span>
                </>
            ) : (
                // 动态数据卡片
                <>
                    <h3
                        onClick={() => {
                            if (linksrc) window.location.href = linksrc;
                        }}
                        style={{ cursor: linksrc ? 'pointer' : 'default' }}
                    >
                        {title}
                    </h3>
                    <h5
                        onClick={(e) => {
                            e.stopPropagation();
                            if (onCategoryClick) onCategoryClick(category);
                        }}
                        className={isSelected ? 'selected' : ''}
                        style={{ cursor: 'pointer' }}
                    >
                        #{category}
                    </h5>
                    <span>{description}</span>
                </>
            )}
        </div>
    );
};