import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

// Define the types for allowed roles
interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const role = localStorage.getItem('role');

  // Check if the current role is allowed
  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
