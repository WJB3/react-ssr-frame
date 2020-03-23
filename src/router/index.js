import Hello from './../pages/Hello';
import Link from './../pages/Link';

export default [
    {
        path:"/",
        exact:true,
        component:Hello,
        key:"hello"
    },
    {
        path:"/link",
        exact:true,
        component:Link,
        key:"link"
    }
]

