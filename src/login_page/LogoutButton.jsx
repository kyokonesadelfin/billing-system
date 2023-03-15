import React from 'react';
import { useNavigate } from 'react-router-dom';

const clientId = '294647397985-rp6evv218p00oo42tlfjh3054p479idq.apps.googleusercontent.com';

function LogoutButton() {
  const navigate = useNavigate();
  const clientIdRef = React.useRef(clientId);

  const onLogoutSuccess = () => {
    console.log('Logout Success');
  };

  const onLogoutFailure = () => {
    console.log('Logout Failure');
  };

  const logout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
      auth2.disconnect();
      console.log('Access token revoked');
      onLogoutSuccess().then(() => navigate('/'));     
    }).catch(onLogoutFailure);
  };

  React.useEffect(() => {
    // Load the Google API library
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: clientIdRef.current,
      });
    });
  }, [clientIdRef]);
  

  return (
    <div>
      <button
        onClick={() => {
          logout();
        }}
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
        onLogoutFailure={onLogoutFailure}
        style={{border: "none"}}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
