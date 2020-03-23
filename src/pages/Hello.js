import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.scss';
import ConnectStyle from './../component/ConnectStyle';

@ConnectStyle(styles)
class Hello extends React.Component{
    render(){
        return (
            <div className={styles.color}>
                hello world changes 啊啊啊啊我会
                <button  onClick={()=>alert("2")}>点击我！！</button>
                <Link to="/link">Link</Link>
            </div>
        )
    }
}

export default Hello;
