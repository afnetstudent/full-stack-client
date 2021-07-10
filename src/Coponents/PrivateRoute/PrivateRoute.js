import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router';
import { UserContex } from '../../App';
const PrivateRoute = ({ children, ...rest }) => {

    const  [logginUser, setLoggingUser] = useContext(UserContex)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          logginUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;