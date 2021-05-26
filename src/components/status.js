import React from "react"
import './style.css';
import "antd/dist/antd.css";
import { Progress ,Divider} from 'antd';


export default class Status extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="section">
                <div className="status">
                    <div className="backed">
                        <h style={{color:"black",fontSize:"200%",fontWeight:"700"}}>$89,415</h>
                        <div className="text-section">
                            <p>
                            of $100,000 backed
                            </p>
                        </div>
                    </div>
                    <div className="verticaldivider"/>
                    <div className="backers">
                        <h style={{color:"black",fontSize:"200%",fontWeight:"700"}}>
                            5,007 
                        </h>
                        <div className="text-section">
                           <p>
                            total backers
                            </p> 
                        </div>
                    </div>
                    <div className="verticaldivider"/>
                    <div className="divider">

                    </div>
                    <div className="daysleft">
                        <h style={{color:"black",fontSize:"200%",fontWeight:"700"}}>
                            56
                        </h>
                        <div className="text-section">
                            <p>
                            days  left
                            </p>
                            
                        </div>
                    </div>                
                </div>
                <progress  value="90" max="100" background="red" style={{color:"red",width:"90%",height:"20px",color:"hsl(176, 50%, 47%)"}}> 32% </progress>

            </div>
        )
    }
}