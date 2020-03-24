import React from 'react';
import { Link,Redirect } from 'react-router-dom';

export default class LinkDemo extends React.Component{
    render(){
        return (
            <div>
                LINK
                <Link to="hello">hello</Link>
                <Redirect to="/login" />
            </div>
        )
    }
}
