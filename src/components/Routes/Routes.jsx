import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../../pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        children:[
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])
export default routes