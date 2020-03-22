import React from 'react';
import { Link } from 'react-router-dom';

export default class Hello extends React.Component{
    render(){
        return (
            <div>
                hello world changes 啊啊啊啊我会
                <button onClick={()=>alert("2")}>点击我！！</button>
                <Link to="/link">Link</Link>
            </div>
        )
    }
}
