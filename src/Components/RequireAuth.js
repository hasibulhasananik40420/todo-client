import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../hooks/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()

    if(loading){
        return <p>Loading..</p>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    return children
};

export default RequireAuth;