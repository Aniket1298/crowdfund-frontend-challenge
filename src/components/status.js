import React from "react"
import './style.css';
import "antd/dist/antd.css";
import { Progress ,Divider} from 'antd';
import { OmitProps } from "antd/lib/transfer/ListBody";


export default function Status(props) {
        
        return(
            <div className="section">
                <div className="status">
                    <div className="backed">
                        <h style={{color:"black",fontSize:"200%",fontWeight:"700"}}>${props.amount}</h>
                        <div className="text-section">
                            <p>
                            of $1000000 backed
                            </p>
                        </div>
                    </div>
                    <div className="verticaldivider"/>
                    <div className="backers">
                        <h style={{color:"black",fontSize:"200%",fontWeight:"700"}}>
                            {props.backers} 
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
                <progress  value={props.amount/props.total *100} max="100" background="red" style={{color:"red",width:"90%",height:"20px",color:"hsl(176, 50%, 47%)"}}> 32% </progress>

            </div>
        )
    }
