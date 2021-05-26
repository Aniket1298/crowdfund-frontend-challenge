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
            <div className="backthis">
                <h>
                    Back this project
                </h>
                <div className="text-section">
                    <p>
                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                    </p>
                </div>
                <div className="noreward">
                    

                </div>
            </div>
        )
    }
}