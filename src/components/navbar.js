import { render } from "@testing-library/react";
import React from "react"
import './style.css';
class Link extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
        <div>
            <a href="#">
            <p style={{color:"white",fontSize:"105%",fontWeight:"400"}} onClick={console.log()}>
                {this.props.tag}
            </p>
            </a>
            
        </div>
        )
    }

}

export default class Navbar extends React.Component {

    render(){
        return(
            <div className="navbar">
                    <div classNam="logo">
                        <a href="#">
                        <b style={{color:"white",fontFamily:"sans-serif",fontWeight:"1000"}}>
                            crowdfund
                        </b>
                        </a>
                        
                    </div>
                    <div className="links">
                            <Link
                                tag={"About"}
                            />
                        <Link
                            tag={"Discover"}
                        />
                        <Link
                            tag={"Get Started"}
                        />
                    </div>
                    
                
                
            </div>
        )
    }
}