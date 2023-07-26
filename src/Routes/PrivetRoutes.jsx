import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-bars loading-lg text-center mx-auto "></span>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivetRoutes;