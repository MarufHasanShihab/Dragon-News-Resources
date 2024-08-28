import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";




const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading){
        return <Spinner/>
    }
    if(user.email){
        return children
    }else{
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;