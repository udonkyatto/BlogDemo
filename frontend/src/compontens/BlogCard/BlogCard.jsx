import React from 'react'
import "./BlogCard.css"

export const BlogCard = ({ title, description, category, onCategoryClick, isSelected }) => {
    return (
        <div className='card-container'>
            <h3>
                {title} 
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
            </h3> 
            <span>{description}</span>
        </div>
    )
}