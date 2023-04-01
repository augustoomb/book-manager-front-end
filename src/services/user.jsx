import axios from 'axios';

const backUrl = process.env.REACT_APP_BACKEND_URL;

const loginRequest = async (email, password) => {
  try {
    const response = await axios.post(`${backUrl}/users/login`, { email, password });
    return response.data;
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
};

const registerRequest = async (name, email, password, role) => {
  try {
    const response = await axios.post(
      `${backUrl}/users`,
      { name, email, password, role },
    );
    return response.data;
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
};

export { loginRequest, registerRequest };
