import { api } from './apiUtils';

export const login = async (email, password) => {
    try {
      const response = await api.get(`/api/admin/${email}/${password}`);
      localStorage.setItem('username', email);

      if (response) {
        localStorage.setItem('username', email);
        return true;
      } else {
        throw new Error('No response found');
      }
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  };
  
  export const logout = () => {
    localStorage.removeItem('username');
  };
  
  export const isLoggedIn = () => {
    return localStorage.getItem('username') !== null;
  };