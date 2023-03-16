import axios from 'axios';

const backUrl = process.env.REACT_APP_BACKEND_URL;

const loginRequest = async (email, password) => {
  try {
    const response = await axios.post(`${backUrl}/users/login`, { email, password });
    return response.data;
  } catch (error) {
    if (error.response.data.message.issues[0].message) {
      return {
        error: error.response.data.message.issues[0].message,
      };
    }
    return {
      error: error.response.data.message,
    };
  }
};

// const validateToken = async (token) => {
//   try {
//     const response = await axios.post(`${backUrl}/users/validateToken`, { token });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export { loginRequest };
