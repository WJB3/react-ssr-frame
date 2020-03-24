import React from 'react';
import ReactDom from 'react-dom';
import Routes from './../router/index';
import { BrowserRouter,Route, Switch} from 'react-router-dom';

const App=()=>{
    return(
        <BrowserRouter>
            <Switch>
            {
                Routes.map(props=>(
                        <Route {...props} />
                ))
            }
            </Switch>
        </BrowserRouter>
    )
}

ReactDom.hydrate(<App suppressHydrationWarning={true}/>,document.getElementById("root"))