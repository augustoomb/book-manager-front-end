import axios from 'axios';

const searchGoogleBooksApi = async (searchInput) => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes',
      params: {
        q: searchInput,
        langRestrict: 'pt',
        printType: 'books',
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data.error.message;
  }
};

export default searchGoogleBooksApi;
