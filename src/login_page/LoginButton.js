import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

const clientId = '294647397985-rp6evv218p00oo42tlfjh3054p479idq.apps.googleusercontent.com';

function LoginButton() {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    const accessToken = res.tokenObj.access_token;
    navigate('/dashboard', { state: { accessToken } }); // pass accessToken to "/dashboard" page
    alert('Login Successful');
  };

  const onFailure = (res) => {
    console.log('Login Failed:', res);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.onload = () => {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: clientId
        });
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'none'}
        isSignedIn={false}
        prompt="select_account"
        responseType="token"
      />
    </div>
  );
}

export default LoginButton;
