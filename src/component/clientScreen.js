import React from 'react';
import { Redirect, Route } from 'react-router-dom';



const ClientScreen = ({ component: Component, ...rest }) => {
    return(
        <Route
          {...rest}
          render={
            (props) => 
            localStorage.getItem("username") ? 
            (<Component {...props} />)
            :
            (<Redirect to="/" />)
          }
        />
    )
}

export default ClientScreen;