import React from "react"
import './style.css';
import './navbar'
import Navbar from "./navbar";

export default class Header extends React.Component {

    render(){
        return(
            <div className="hero-image">
                <Navbar/>
            </div>
        )
    }
}