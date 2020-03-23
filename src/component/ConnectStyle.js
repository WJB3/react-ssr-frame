import React, { Component } from 'react';

export default (styles) =>(WrappedComponent)=> {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      let staticContext=this.props.staticContext;
       
      if(styles._getContent){
          staticContext.css.push(styles._getCss());
      }
    }

    render() {
      return (<WrappedComponent {...this.props} />);
    }

  };

  return NewComponent;
};