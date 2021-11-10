import React from "react";
import { Route, Navigate } from "react-router-dom";

const GuardedRoute = ({ Component, auth, ...rest }: any) => <Route
{...rest}/>

export default GuardedRoute;
