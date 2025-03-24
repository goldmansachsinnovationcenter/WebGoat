import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  // Check local storage on initial load
  useEffect(() => {
    const storedAuth = localStorage.getItem('webgoat-auth');
    const storedUser = localStorage.getItem('webgoat-user');
    
    if (storedAuth === 'true' && storedUser) {
      setIsAuthenticated(true);
      setUsername(storedUser);
    }
  }, []);

  const login = (username: string, _password: string) => {
    // In a real app, we would validate with the backend
    // For now, just set authenticated state
    setIsAuthenticated(true);
    setUsername(username);
    localStorage.setItem('webgoat-auth', 'true');
    localStorage.setItem('webgoat-user', username);
    
    // Log successful login
    console.log(`User ${username} logged in successfully`);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    localStorage.removeItem('webgoat-auth');
    localStorage.removeItem('webgoat-user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
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
