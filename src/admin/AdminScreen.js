import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AdminScreen = ({ component: Component, ...rest }) => {
    return(
        <Route 
        {...rest}
        render={
            (props) => 
            localStorage.getItem("adminid") ? (
                <Component {...props} />
            ) : (
                <Redirect to="/admin/Login" />
            )
        }
        />
    )
}

export default AdminScreen