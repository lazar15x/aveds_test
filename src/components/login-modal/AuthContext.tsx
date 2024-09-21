import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../users.json';

interface User {
  login: string;
  name: string;
}

interface ICredentials {
  login: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: ICredentials) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user-login');
    console.log('userFromSt', userFromStorage);

    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []);

  const login = (credentials: ICredentials) => {
    const user = users.find(
      user =>
        user.login === credentials.login &&
        user.password === credentials.password,
    );

    if (user) {
      const jsonUser = JSON.stringify({
        login: user.login,
        name: user.name,
      });
      console.log('cred', credentials);
      localStorage.setItem('user-login', jsonUser);
      setUser(user);
      navigate('/acc');
    } else {
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem('user-login');
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
