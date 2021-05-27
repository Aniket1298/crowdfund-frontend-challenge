import React, { useState } from 'react';

import './style.css';
import Product from './product'
import Detail from './detail'
import Status from './status'
import About from "./about";
import { Modal, Button } from 'antd';
var data={
    amount:89914,
    total:100000,
    backers:5007,
    products:[
        {
            name:"Bamboo Stand",
            left:101,
            cost:12
        }
        ,
        {
            name:"Black Edition Stand",
            left:64,
            cost:25
        }
    ]
}
export default function  Content(){
    
    const [amount, setAmount] = useState(data.amount)
    const [backers,setBackers]= useState(data.backers)
    const [total,setTotal]= useState(data.total)
    function backproject(inc){
        var newAmount = amount-inc
        setAmount(newAmount)
        setBackers(backers+1)
    }
    
    return(
        <div className="content">
            <Detail backproject={backproject} products={data.products}/>
            <Status amount={amount}  total={total} backers={backers}/>
            <About/>
        </div>
    )
}
