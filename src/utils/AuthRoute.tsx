import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {GlobalState} from '../redux/store';

interface Props {
    component: React.ComponentType<any>;
    authenticated?: boolean;
    exact?: boolean;
    path: string;
}

const AuthRoute: React.FC<Props> = ({authenticated, component: Component, ...rest}) => {
    return (
        <Route 
            {...rest}
            render={(props) => authenticated ? <Redirect to='/'/> : <Component {...props}/>}
        />
    )
};

const mapStateToProps = (state: GlobalState) => ({authenticated: state.user.authenticated});

export default connect(mapStateToProps, undefined)(AuthRoute);
