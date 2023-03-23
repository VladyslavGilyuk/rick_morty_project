import React from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import  "../styles/GoogleLogin.css";

function GoogleLogin() {
  
  return (
    <div className="GoogleLogin">
      <LoginSocialGoogle
      client_id={"486776347155-39dq8kqom7seqlp9a0qqq04slk75reo8.apps.googleusercontent.com"}
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      onResolve={({ provider, data }) => {
        alert("Login successfull")
        console.log(provider, data);
      }}
      onReject={(err) => {
        alert("Login unsuccessfull")
        console.log(err);
      }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  );
}

export default GoogleLogin;