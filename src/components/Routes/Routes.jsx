import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ReadMoreDetails from "../../pages/ReadMoreDetails/ReadMoreDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/newDetails/:id",
                element: <ReadMoreDetails/>
            }
        ]
    }
])
export default routes