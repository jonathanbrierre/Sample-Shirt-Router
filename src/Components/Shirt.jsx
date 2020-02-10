import React from 'react'

const Shirt = ({shirt}) => {
    const shirtStyle = {
        width: '200px',
        height: '200px'
    }
    return (
        <div>
            <p>This is Shirt {shirt.id}</p> 
            <img style = {shirtStyle}src = {shirt.imageUrl} alt = '' />
        </div>
    )
}

export default Shirt










