const API_KEY = "d98c9577a2ed51d486b21c88e4eb5a17";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMedias = async (type: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/${type}/day?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTopratedMedias = async (type: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/top_rated?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getPopularMedias = async (type: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMoviesByGenre = async (type: string, id: number) => {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${id}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieVideosByID = async (type: string, id: string) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieSearchResults = async (
  type: string,
  query: string
) => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&include_adult=false&language=en-US&query=${query}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieDetailsByID = async (type: string, id: number) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getSimilarTVorMovies = async (type: string, id: number) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getAllfavorites = async (uid:string, accountID:string) => {
    try {
        const res = await fetch(
            `/api/favorites/get-all-favorites?id=${uid}&accountID=${accountID}`,
            {
                method: "GET",
            }
        );

        const data = await res.json();

        return data && data.data;
    } catch (e) {
        console.log(e);
    }
};
