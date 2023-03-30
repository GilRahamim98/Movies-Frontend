import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import MoviesList from "../../components/moviesList/MoviesList";
import { urlMovies } from "../../endpoints";
import { landingPageDTO } from "../../models/movies.model";
import AlertContext from "../../utils/AlertContext";

export default function Home() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    loadData();
  }, []);
  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
      setMovies(response.data);
    });
  }

  return (
    <AlertContext.Provider
      value={() => {
        loadData();
      }}
    >
      <h3 dir="rtl">הקולנוע הישראלי</h3>
      <MoviesList movies={movies.moviesList} />

      <h3 dir="rtl">עכשיו בקולנוע</h3>
      <MoviesList movies={movies.inTheaters} />
    </AlertContext.Provider>
  );
}
