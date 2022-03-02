import { useState } from 'react';
import Cookies from "js-cookie";
import { Redirect, Route } from 'react-router';
// import axios from './'
export  const Auth = {

  login: login,

  authed: isLoggedIn,

  logout: logout
}

function login(payload){
    Cookies.set("postbird_session", payload.token, {
        expires: new Date(payload.accessTokenExpiresAt),
        path: "/",
        domain: window.location.hostname,
        sameSite: "lax",
        // secure: process.env.NODE_ENV === "production"
    });
    Cookies.set(
        "postbird_expire_in",
        payload.accessTokenExpiresIn,
        {
            expires: new Date(payload.accessTokenExpiresAt),
            path: "/",
            domain: window.location.hostname,
            sameSite: "lax",
            // secure: process.env.NODE_ENV === "production"
        }
    );
    Cookies.set(
        "postbird_expired_at",
        payload.accessTokenExpiresAt,
        {
          expires: new Date(payload.accessTokenExpiresAt),
          path: "/",
          domain: window.location.hostname,
          sameSite: "lax",
          // secure: process.env.NODE_ENV === "production"
        }
    );

}

function logout(){
    Cookies.remove("postbird_session", {
        path: "/",
        domain: window.location.hostname
    });
    Cookies.remove("postbird_expire_in", {
      path: "/",
      domain: window.location.hostname
    });
    Cookies.remove("postbird_expired_at", {
      path: "/",
      domain: window.location.hostname
    });
}

function isLoggedIn(){
  const accessToken = Cookies.get("postbird_session"); 
  return (accessToken) ? true : false;
}


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default Auth;