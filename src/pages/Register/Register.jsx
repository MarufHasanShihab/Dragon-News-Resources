import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Register = () => {
    const {userCreate} = useAuth()
    const navigate = useNavigate()
    const register = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // password validation
        if(password.length < 6){
            return toast.error("password must be at least 6 characters")
        }
        userCreate(email, password)
        .then(()=> {
            toast.success("user created successfully!")
            navigate("/")
        })
        .catch((error)=> toast.error(error.code.split('/').join(" ")))
    }
    return (
        <div className="py-6 px-3">
        <Navbar/>
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">Register</h2>
          </div>
          <form onSubmit={register}>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold">Your Name</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="text"
                name="name"
                placeholder="your name"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold">Photo Url</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="text"
                name="photo"
                placeholder="photo url"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold">Email</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="email"
                name="email"
                placeholder="email"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold">Password</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="password"
                name="password"
                placeholder="**********"
              />
            </div>
            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label>
                  <input type="checkbox" />
                  <span className="ml-1 font-extrabold">Remember me</span>
                </label>
              </div>
              <div className="w-full lg:w-auto px-4">
                <a
                  className="inline-block font-extrabold hover:underline"
                  href="#"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">
              Sign in
            </button>
            <p className="text-center font-extrabold">
            Already have an account?{" "}
              <Link to="/login" className="text-red-500 hover:underline" >
              Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;