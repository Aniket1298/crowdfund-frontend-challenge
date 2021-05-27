import {React ,useState} from "react"
import './style.css';
import { Button,InputNumber } from 'antd';


export default function Product (props) {
    const [amount,setAmount ] = useState(0)
    const [left,setLeft]=useState(props.left)
    function  handleChange(value){
        setAmount(value)
    }
    function handleClick(){
        setLeft(left-1)
        props.handleCancel()
        props.backproject(amount)
    }
    
        return(
            <div className="product" style={{borderColor:"rgb(224, 223, 223)"}}>
                <div className="upper">
                    <h3>
                        {props.name}
                    </h3>
                    <p>
                        Pledge ${props.cost} or more   
                    </p>
                    {props.pledge ? <p>{"     "}</p>  :null}
                    {props.pledge ? <h2>{props.left} left</h2> : null }
                    

                </div>
                <div className="text-section" >
                        <p style={{fontSize:"120%"}}>
                        You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list.
                        </p>
                    </div>
                {props.pledge ? <hr backgroundcolor="rgb(255, 255, 255)" ></hr> :null}
                <div className="remaining">
                {!props.pledge ? <h2>{left} left</h2> : null }
                {props.pledge ? <div><p>Enter Your Pledge</p></div> :null}
                {!props.pledge ? <Button type="primary" shape="round"  size={"large"}  style={{ background: "hsl(176, 50%, 47%)", }}>
                        Select Reward
                </Button> :null}
                {props.pledge? <div>
                    <div className="enter">
                        <div className="box">
                            $ <InputNumber min={props.cost} defaultValue={props.cost} bordered={false} onChange={handleChange} />
                        </div>
                        <div style={{}}>{" "}</div>
                        <Button type="primary" shape="round"  size={"large"}  style={{ background: "hsl(176, 50%, 47%)", }} onClick={handleClick}>
                            Continue
                        </Button>    
                    </div>
                    
                </div> :null}
                
                </div>
            </div>
        )
    }
