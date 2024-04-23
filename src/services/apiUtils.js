import axios from 'axios';

export const postData = async (endpoint, data) => {
  const baseUrl = 'https://agileBackendapi.vercel.app'
  const url = `${baseUrl}${endpoint}`;
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${url}:`, error);
    throw error;
  }
};
