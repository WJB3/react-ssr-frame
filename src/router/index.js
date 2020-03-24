import Hello from './../pages/Hello';
import Link from './../pages/Link';
import NotFound from './../pages/NotFound';
import Login from './../pages/Login';

export default [
    {
        path:"/hello",
        exact:true,
        component:Hello,
        key:"hello"
    },
    {
        path:"/link",
        exact:true,
        component:Link,
        key:"link"
    },
    {
        path:"/login",
        exact:true,
        component:Login,
        key:"login"
    },
    {
        path:"*",
        component:NotFound,
        key:"notfound"   
    }
]

