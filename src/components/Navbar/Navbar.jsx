import { Link } from "react-router-dom";
import user_img from "../../assets/user.png"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Navbar = () => {
    const {user, logout, setUser} = useAuth()
    const signOut = ()=> {
        logout()
        .then(() => {
            toast.success("You have signed out")
            setUser({})
        })
        .catch((err => toast.error(err.message)))
    }
    return (
        <div className="flex items-center justify-between pb-12">
            {/* nav item */}
            <div className="mx-auto flex items-center gap-8 text-lg leading-[30px] text-[#706f6f]">
                <Link to="/">Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            {/* user and login btn */}
            <div className="flex items-center gap-4">
            <div>
                {
                    user.photoURL ? <img src={user.photoURL} className="w-[40px] h-[40px] rounded-full" /> : <img src={user_img} className="w-[40px] h-[40px] rounded-full" />
                }
            </div>
            {
                user.email  ? <button onClick={signOut} className="py-1 px-4 bg-[#403f3f] rounded-sm text-white font-medium leading-[30px]">Logout</button> :<Link to="/login"><button className="py-1 px-4 bg-[#403f3f] rounded-sm text-white font-medium leading-[30px]">Login</button></Link>
            }
            </div>
        </div>
    );
};

export default Navbar;