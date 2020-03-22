import React from 'react';
import ReactDom from 'react-dom';
import Routes from './../router/index';
import { BrowserRouter,Route} from 'react-router-dom';

const App=()=>{
    return(
        <BrowserRouter>
            {
                Routes.map(props=>(
                        <Route {...props} />
                ))
            }
        </BrowserRouter>
    )
}

ReactDom.hydrate(<App suppressHydrationWarning={true}/>,document.getElementById("root"))