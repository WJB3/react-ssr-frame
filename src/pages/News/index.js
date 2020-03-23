import React from 'react';
import styles from './index.scss';

class Index extends React.Component{
    render(){
        return(
            <div className={styles.news}>
                <header>我是头部！</header>
                <ul>
                    <li>content1</li>
                    <li>content1</li>
                    <li>content1</li>
                </ul>
                <p>hello</p>
            </div>
        )
    }
}

export default Index;