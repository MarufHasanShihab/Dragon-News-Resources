import { Link } from "react-router-dom";
import user_img from "../../assets/user.png"


const Navbar = () => {
    return (
        <div className="flex items-center justify-between pb-12">
            {/* nav item */}
            <div className="mx-auto flex items-center gap-8 text-lg leading-[30px] text-[#706f6f]">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            {/* user and login btn */}
            <div className="flex items-center gap-4">
            <img src={user_img} className="w-[40px]" />
            <button className="py-1 px-4 bg-[#403f3f] rounded-sm text-white font-medium leading-[30px]">Login</button>
            </div>
        </div>
    );
};

export default Navbar;