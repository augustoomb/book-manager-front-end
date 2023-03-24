import axios from 'axios';

const backUrl = process.env.REACT_APP_BACKEND_URL;

const saveBook = async (objBook) => {
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
};

const getAllBooksByUser = async () => {
  const response = await axios.get(`${backUrl}/books`, {
    headers: {
      Authorization: localStorage.getItem('tokenLogin'),
    },
  });
  return response.data;
};

// const getOneBookByUser = async (idBook) => {
//   const response = await axios.get(`${backUrl}/books/${idBook}`, {
//     headers: {
//       Authorization: localStorage.getItem('tokenLogin'),
//     },
//   });
//   return response.data;
// };

const updateBook = async (id, objBook) => {
  const response = await axios.put(
    `${backUrl}/books/${id}`,
    {
      title: objBook.title,
      thumb: objBook.sendImg,
      hasBeenRead: objBook.hasBeenRead,
      authorName: objBook.author,
      infoLink: objBook.infoLink,
    },
    {
      headers: {
        Authorization: localStorage.getItem('tokenLogin'),
      },
    },
  );
  return response.status;
};

export { saveBook, getAllBooksByUser, updateBook };
