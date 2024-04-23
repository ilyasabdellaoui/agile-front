import { api } from './apiUtils';

export const login = async (email, password) => {
    try {
      const response = await api.get(`/api/admin/${email}/${password}`);
      
      if (response.data.token) {
        localStorage.setItem('username', email);
        localStorage.setItem('token', response.data.token);
        return true;
      } else {
        throw new Error('Token not found in response');
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