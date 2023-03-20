import axios from 'axios';

const backUrl = process.env.REACT_APP_BACKEND_URL;

const saveBook = async (title, author, image, infoLink) => {
  try {
    const response = await axios.post(`${backUrl}/books`, {
      title, author, image, infoLink,
    });
    return response.data;
  } catch (error) {
    return {
      error: error.response.data.message,
    };
  }
};

export { saveBook };
