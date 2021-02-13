import axios from 'axios';

export const Movies = (type) => {
  return axios.create({
    baseURL: `http://www.omdbapi.com/?${type}&apikey=9dc15e45&`,
  });
};
