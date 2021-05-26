import React from "react"
import './style.css';
import "antd/dist/antd.css";
import { Progress ,Divider} from 'antd';
import Product from "./product";

export default class About extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="about">
                <h1>
                    About this project
                </h1>
                
                <div className="text-section">
                    <p style={{fontSize:"16px"}}>
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
  to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
  your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                    <br/>
                    <br/>
                    <br/>
                    
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
  to allow notepads, pens, and USB sticks to be stored under the stand
                    </p>
                </div>
                <Product pledge={false} name={"Bamboo Stand"} left={"101"} cost={"12"}/>
                <Product pledge={false} name={"Black Edition Stand"} left={"64"}  cost={"25"}/>


            </div>
        )
    }
}