
import { DownloadOutlined } from '@ant-design/icons';

import './style.css';
import React, { useState } from 'react';
import { Modal, Button,Radio,Input,Space } from 'antd';
import Product from './product'


export default function  Detail(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [value,setValue] = useState(1)
    function showModal (){
        
        setIsModalVisible(true)
        
      };
    
    function handleOk () {
        setIsModalVisible(false)
      };
    
    function handleCancel ()  {
        setIsModalVisible(false)
      };
        
        return(
            <div className="detail">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>
                <h2 style={{color:"black", fontFamily:"Commisioner",fontWeight:700 ,top:"-200px"}}>
                    Mastercraft Bamboo Monitor Riser
                </h2>
                
                <div className="text-section">
                    <p>
                    A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                    </p>
                    
                </div>  
    
                <div style={{height:"5%"}}></div>
                <Modal  visible={isModalVisible} width={"55%"} onCancel={handleCancel} footer={null}>
                    <div className="backmodal">
                        <h3>
                            Back this project
                        </h3>
                        <div className="text-section">
                            <p>
                            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                            </p>
                        </div>
                        
                        <Radio.Group  >
                            <Space direction="vertical">
                            <div style={{borderColor:"blue"}}>
                            <Radio value={1}>
                                <div>
                                    <h3>Pledge with no reward</h3>
                                    <div className="text-section">
                                        <p>
                                        Choose to support us without a reward if you simply believe in our project. As a backer, 
            you will be signed up to receive product updates via email
                                        </p>
                                    </div> 
                                    
                                </div>
                                </Radio>
                            </div>
                            
                            <Radio value={2}>
                            <Product pledge={true} name={"Bamboo Stand"} left={101} cost={12} backproject ={props.backproject} handleCancel={handleCancel}/>
                
                            </Radio>
                            <Radio value={3}  >
                            <Product pledge={true} name={"Black Edition Stand"} left={64}  cost={25} backproject ={props.backproject} handleCancel={handleCancel}/>
                            </Radio>
                            
                            </Space>
                        </Radio.Group>
                    </div>
                </Modal>
                <div className="button-section">
                  
                    <Button type="primary" shape="round"  size={"large"}  style={{ background: "hsl(176, 50%, 47%)"}} onClick={showModal}>
                        back this project
                    </Button>
                    <div className="bookmark" style={{height:"10%"}}> 
                        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                        {"     "}
                    </div>  
                </div>
            </div>
        )
    }
