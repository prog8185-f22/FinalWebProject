import React from 'react'
import logo from '../Images/robot.gif'

export const NotFound = () => {
    return (
        <div >
           <img src={logo} alt="logo" class="center"/>
           <h1 style = {{ textAlign: "center" }} class="center">Page Not Found</h1>
        </div>
    )
}
