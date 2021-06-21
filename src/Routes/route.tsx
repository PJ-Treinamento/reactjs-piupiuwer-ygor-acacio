import React from "react";
import { useContext } from "react";
import { Route as ReactRouter, RouteProps as ReactRouteProps, Redirect} from 'react-router-dom';
import { Context } from "../Assets/Hooks/authContext";

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const {authenticated} = useContext(Context)
  const {user} = authenticated
  return (
    <ReactRouter
        {...rest}
        render={({ location }) => {
            return isPrivate === !!user
                ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{
                            pathname: isPrivate ? '/' : '/feed',
                            state: { from: location }
                        }}
                    />
                );
        }}
    />
)
}

export default Route;