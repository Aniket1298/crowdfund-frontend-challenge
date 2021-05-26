import React, { useState } from 'react';

import './style.css';
import Product from './product'
import Detail from './detail'
import Status from './status'
import About from "./about";
import { Modal, Button } from 'antd';


export default class Content extends React.Component {
    constructor(props){
        super(props)
        this.ref = React.createRef();
        this.state={
            amount:89914,
            backers:5007
        }
        this.backproject=this.backproject.bind(this)

    }
    
    backproject(amount){
      
        this.setState({amount:this.state.amount-amount})
        return(this.state.amount)
    }
    
    render(){
        return(
            <div className="content">
                <Detail backproject={this.backproject}/>
                <Status/>
                <About/>
            </div>
        )
    }
}