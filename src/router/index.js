import Hello from './../pages/Hello';
import Link from './../pages/Link';
import NotFound from './../pages/NotFound';

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
        path:"*",
        component:NotFound,
        key:"notfound"   
    }
]

