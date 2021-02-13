import axios from 'axios';

export const Trailer = (titleTrailer) => {
  let youtubeAPI = 'AIzaSyDXnX3DFHBgxp5sZd3T9PmT_ygcr_fYono';
  return axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeAPI}&q=${titleTrailer}&type=video&maxResults=1`,
  });
};
