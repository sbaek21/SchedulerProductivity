import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/api',  // Adjusted to match backend port
  withCredentials: true,
});

// Define the expected response structure
interface AuthenticationResponse {
  message: string;
  error?: string;
}

export const loginUser = async (username: string, password: string) => {
  try {
    // Specify the type of the response data
    const response = await api.post<AuthenticationResponse>('/login', { username, password });
    return response;
  } catch (error) {
    throw error;
  }
};

export const signUpUser = async (username: string, password: string, passwordRepeat: string, email: string) => {
  try{
    const response = await api.post<AuthenticationResponse>('/signup', {username, password, passwordRepeat, email});
    return response;
  } catch(error) {
    throw error;
  }
};