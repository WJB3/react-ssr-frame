import Hello from './../pages/Hello';
import Link from './../pages/Link';

export default [
    {
        path:"/",
        exact:true,
        component:Hello,
        key:"/"
    },
    {
        path:"/link",
        exact:true,
        component:Link,
        key:"/link"
    }
]

