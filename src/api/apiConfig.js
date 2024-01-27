const apiConfig = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: "3fac70260a5a4a0cc9324207af7f9c8c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w200Image: (imgPath) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
  w185Image: (imgPath) => `https://image.tmdb.org/t/p/w185/${imgPath}`,
  embedMovie: (id) => `https://vidsrc.xyz/embed/movie?tmdb=${id}`,
  embedTV: (id) => `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=1&episode=1`,
  // embedMovie: (id) => `https://2embed.org/embed/${id}`,
  // embedEpisode: (id, season, episode) =>
  // https://vidsrc.xyz/embed/movie?tmdb=385687/
  // https://vidsrc.xyz/embed/tv?tmdb=1399&season=1&episode=1
  // https://2embed.org/embed/series?tmdb=${id}&sea=${season}&epi=${episode}
  // embedTV: (id, season, episode) => `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}`,
  // https://vidsrc.xyz/embed/tv?tmdb=1399&season=1&episode=1
};
export default apiConfig;
