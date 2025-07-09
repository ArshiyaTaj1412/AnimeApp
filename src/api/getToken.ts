import axios from 'axios';

const API_URL = 'https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent';

export const getToken = async (email: string): Promise<string | null> => {
  try {
    const response = await axios.post(API_URL, { email });
    const token = response.data?.token;
    console.log('Token received:', token);
    return token;
  } catch (error) {
    console.error('Failed to fetch token:', error);
    return null;
  }
};
