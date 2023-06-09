import React from "react";
import classes from './style.module.scss'

const AccountButton = () => {
  const [token, setToken] = React.useState(null)
  React.useEffect(() => {
    const tokenValue = localStorage.getItem('Bekas_token'); // Get the token value
    setToken(tokenValue); // Update the token state
  }, []);
  return (
    <div className={classes.qwe}>
      <a href={token ? '/account/dashboard' : '/account/login'}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='white'>
        <path d="M13.7,10.7C15.1,9.6,16,7.9,16,6c0-3.3-2.7-6-6-6S4,2.7,4,6c0,1.9,0.9,3.6,2.3,4.7C2.6,12.2,0,15.8,0,20h2c0-4.4,3.6-8,8-8 s8,3.6,8,8h2C20,15.8,17.4,12.2,13.7,10.7z M6,6c0-2.2,1.8-4,4-4s4,1.8,4,4c0,2.2-1.8,4-4,4S6,8.2,6,6z"></path>
      </svg>
      </a>
    </div>
  );
};

export default AccountButton;
