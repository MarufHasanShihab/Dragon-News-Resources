import { Outlet } from "react-router-dom";


const MainLayouts = () => {
    return (
        <div className="max-w-[1160px] mx-auto">
            <Outlet/>
        </div>
    );
};

export default MainLayouts;