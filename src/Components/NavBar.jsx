import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = (props) => {

    const renderShirtsNav = () => {
        let aShirt = props.shirts.map(shirtObj => <NavLink to = {`/shirts/${shirtObj.id}`}> Shirt {shirtObj.id} </NavLink> )
        return aShirt
    }
    return (
        <div>
            <NavLink to='/'> Home </NavLink>
            {renderShirtsNav()}
        </div>
    )
}

export default NavBar
