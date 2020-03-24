import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.scss';
import ConnectStyle from './../component/ConnectStyle';

@ConnectStyle(styles)
class NotFound extends React.Component{

    constructor(props){
        super(props);
        const { staticContext } = this.props;
        staticContext && (staticContext.NotFound = true);
    }

    render(){
        return (
            <div className={styles.color}>
               NotFound
            </div>
        )
    }
}

export default NotFound;
