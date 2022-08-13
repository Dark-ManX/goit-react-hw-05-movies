export const KEY = '3178cfb99d9cb37cb3fd903fa9e819f6';

export const fetchRes = KEY => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.rejected(new Error('not found'));
  });
};

export const fetchMovie = (id, KEY) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
      // return Promise.rejected(new Error("not found"));
    }
  );
};

export const fetchMovieByName = (name, KEY) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${name}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    // return Promise.rejected(new Error("not found"));
  });
};

export const fetchCast = (id, KEY) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.rejected(new Error('not found'));
  });
};

export const fetchReviews = (id, KEY) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.rejected(new Error('not found'));
  });
};
