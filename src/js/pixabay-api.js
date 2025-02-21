// У файлі pixabay-api.js зберігай функції для HTTP-запитів.
import axios from 'axios';

const API_KEY = '48944923-7f3a9983f4ca49a5aa37c5c5b';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return axios.get(url)
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Error fetching data from Pixabay API:', error);
      throw error;
    });
}