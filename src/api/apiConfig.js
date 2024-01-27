const apiConfig = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: "3fac70260a5a4a0cc9324207af7f9c8c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w200Image: (imgPath) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
  w185Image: (imgPath) => `https://image.tmdb.org/t/p/w185/${imgPath}`,
  embedMovie: (id) => `https://vidsrc.xyz/embed/movie?tmdb=${id}`,
  embedTV: (id, season, episode) => `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}`,
};
export default apiConfig;
