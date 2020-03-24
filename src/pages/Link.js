import React from 'react';
import { Link } from 'react-router-dom';

export default class LinkDemo extends React.Component{
    render(){
        return (
            <div>
                LINK
                <Link to="hello">hello</Link>
            </div>
        )
    }
}
