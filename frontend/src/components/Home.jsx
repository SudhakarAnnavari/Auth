import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const nav = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      
      setAuthenticated(true);
    } else {
      
      nav('/login');
    }
  }, []);

  return authenticated;
};

const Home = () => {
  const isAuthenticated = useAuth();

  return (
    <div>
      {isAuthenticated && <h1>Welcome to the Home Page!</h1>}
    </div>
  );
};

export default Home;
