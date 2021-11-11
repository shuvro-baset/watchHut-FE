import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, isLoading} = useAuth()
    console.log( admin, "laksdjfljsadf");

    if (isLoading) {
        // showing spinner when reload page.
        return <Col className="d-flex justify-content-center align-items-center my-3" ><Spinner animation="border" variant="primary" /></Col>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ?  (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;