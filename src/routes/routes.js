import { Fragment, lazy, Suspense } from "react";
import Detail from "../pages/detail/Detail"
import Home from "../pages/home/Home"
import Contact from "../pages/contact/Contact";
import News from "../pages/news/News";




const UserLogin = lazy(()=> import("../template/userLoginTemplate/UserLogin"))
const CheckoutTemplate = lazy(()=> import("../template/checkoutTemplate/CheckoutTemplate"))



export const publicRoutes = [
    {path: '/', component: Home},
    {path: '/contact', component: Contact},
    {path: '/news', component: News},
    {path: '/detail/:id', component: Detail},   
    {path: '/login', component: UserLogin, layout: UserLogin},
    {path: '/checkout/:id', component: CheckoutTemplate, layout: CheckoutTemplate}   

]