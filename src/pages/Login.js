import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.scss';
import ConnectStyle from './../component/ConnectStyle';

@ConnectStyle(styles)
class Hello extends React.Component{
    render(){
        return (
            <div className={styles.color}>
                登录界面
            </div>
        )
    }
}

export default Hello;
