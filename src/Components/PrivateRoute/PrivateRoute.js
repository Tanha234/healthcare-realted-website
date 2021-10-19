import userEvent from '@testing-library/user-event';
import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({children,...rest}) => {
    return (
        <div>
            <Route
            {...rest}
            render={({location})=>userEvent.email?children:
            <Redirect
            to={{
                pathname:'/login',
                state:{from:location}
            }}>

            </Redirect>}
            
            
            >

            </Route>
            
        </div>
    );
};

export default PrivateRoute;