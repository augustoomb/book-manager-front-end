import axios from 'axios';

const backUrl = process.env.REACT_APP_BACKEND_URL;

const saveBook = async (objBook) => {
  try {
    const response = await axios.post(`${backUrl}/books`, {
      title: objBook.title,
      thumb: objBook.sendImg,
      hasBeenRead: objBook.hasBeenRead,
      authorName: objBook.author,
      infoLink: objBook.infoLink,
    }, {
      headers: {
        Authorization: localStorage.getItem('tokenLogin'),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      error: error.response.data.message,
    };
  }
};

const getAllBooksByUser = async () => {
  try {
    const response = await axios.get(`${backUrl}/books`, {
      headers: {
        Authorization: localStorage.getItem('tokenLogin'),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      error: error.response.data.message,
    };
  }
};

export { saveBook, getAllBooksByUser };
