import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/mainlayout/MainLayout";
import HomePages from "../pages/mainpages/HomePages";
import AboutPages from "../pages/mainpages/AboutPages";
import ContactPages from "../pages/mainpages/ContactPages";
import Basket from "../pages/mainpages/Basket";
import Detail from "../pages/mainpages/Detail";
import AdminLayout from "../layout/adminlayout/AdminLayout";
import AdminPanel from "../pages/adminpages/AdminPanel";
import Add from "../pages/adminpages/Add";
import Update from "../pages/adminpages/Update";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<HomePages></HomePages>
            },
            {
                path:"about",
                element:<AboutPages></AboutPages>
            },
            {
                path:"contact",
                element:<ContactPages></ContactPages>
            },
            {
                path:"basket",
                element:<Basket></Basket>
            },
            {
                path:"detail/:id",
                element:<Detail></Detail>
            }
        ]
    },
    {
        path:"/adminlayout",
        element:<AdminLayout></AdminLayout>,
        children:[
            {
                index:true,
                element:<AdminPanel></AdminPanel>,
            },
            {
                path:"/adminlayout/add",
                element:<Add></Add>
            },
            {
                path:"/adminlayout/update/:id",
                element:<Update></Update>,
            }
        ]
    }
])