import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.scss';
import ConnectStyle from './../component/ConnectStyle';
import { Helmet } from 'react-helmet';

@ConnectStyle(styles)
class Hello extends React.Component{

    render(){
        return (
            <div className={styles.color}>
                 <Helmet>
                    <title>ReactHelmet使用</title>
                    <meta name="描述" content="这是hello"></meta>
                 </Helmet>
                hello world changes 啊啊啊啊我会
                <button  onClick={()=>alert("2")}>点击我！！</button>
                <Link to="/link">Link</Link>
            </div>
        )
    }
}

Hello.loadData=()=>{

}

export default Hello;
