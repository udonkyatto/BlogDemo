import React from 'react'
import "./BlogCard.css"
import { useContext } from 'react'

export const BlogCard = ({title,description}) => {

    return (
        <>
            <div className='card-container'>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </>


    )
}
