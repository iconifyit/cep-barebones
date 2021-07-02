const React = require('react');
const { useAuth0 } = require('@auth0/auth0-react');

const LoginButton = () => {
  const {
    isAuthenticated,
    loginWithPopup,
  } = useAuth0();

  return !isAuthenticated && (
    <button onClick={(e) => { console.log('Trying to log in'); loginWithPopup()}}>Log in</button>
  );
}

module.exports = LoginButton;