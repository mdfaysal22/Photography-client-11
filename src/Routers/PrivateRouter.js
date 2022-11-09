import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../Contexts/AuthContext';

const PrivateRouter = ({children}) => {
    const location = useLocation();
  const { user, loading } = useContext(UserAuth);
  if (loading) {
    return ( 
        <h1>Loading...</h1>
    );
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/login" } state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;