import React from "react"
import './style.css';
import { Button,InputNumber } from 'antd';

export default class Product extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="product" style={{borderColor:"rgb(224, 223, 223)"}}>
                <div className="upper">
                    <h3>
                        {this.props.name}
                    </h3>
                    <p>
                        Pledge ${this.props.cost} or more
                    </p>
                    {this.props.pledge ? <p>{"     "}</p>  :null}
                    {this.props.pledge ? <h2>{this.props.left} left</h2> : null }
                    

                </div>
                <div className="text-section" >
                        <p style={{fontSize:"120%"}}>
                        You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list.
                        </p>
                    </div>
                {this.props.pledge ? <hr backgroundcolor="rgb(255, 255, 255)" ></hr> :null}
                <div className="remaining">
                {!this.props.pledge ? <h2>101 left</h2> : null }
                {this.props.pledge ? <div><p>Enter Your Pledge</p></div> :null}
                {!this.props.pledge ? <Button type="primary" shape="round"  size={"large"}  style={{ background: "hsl(176, 50%, 47%)", }}>
                        Select Reward
                </Button> :null}
                {this.props.pledge? <div>
                    <div className="enter">
                        <div className="box">
                            $ <InputNumber min={this.props.cost} defaultValue={this.props.cost} bordered={false} />
                        </div>
                        <div style={{}}>{" "}</div>
                        <Button type="primary" shape="round"  size={"large"}  style={{ background: "hsl(176, 50%, 47%)", }}>
                            Continue
                        </Button>    
                    </div>
                    
                </div> :null}
                
                </div>
            </div>
        )
    }
}