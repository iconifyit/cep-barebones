const React = require('react');
const { useAuth0 } = require('@auth0/auth0-react');

const LogoutButton = () => {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</button>
  );
}

module.exports = LogoutButton;