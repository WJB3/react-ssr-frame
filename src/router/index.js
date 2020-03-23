import Hello from './../pages/Hello';
import Link from './../pages/Link';
import News from './../pages/News';

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
    },
    {
        path:"/news",
        exact:true,
        component:News,
        key:"news"
    }
]

