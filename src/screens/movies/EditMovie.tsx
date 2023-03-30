import MovieForm from "./MovieForm";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlMovies } from "../../endpoints";
import { useNavigate, useParams } from "react-router-dom";
import { movieCreationDTO, moviePutGetDTO } from "../../models/movies.model";
import { convertMovieToFormData } from "../../utils/FormDataUtils";
import DisplayErrors from "../../components/errors/DisplayErros";
import Loader from "../../components/loader/Loader";

export default function EditMovie() {
  const navigate = useNavigate();
  const { id }: any = useParams();
  const [movie, setMovie] = useState<movieCreationDTO>();
  const [moviePutGet, setMoviePutGet] = useState<moviePutGetDTO>();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${urlMovies}/PutGet/${id}`)
      .then((response: AxiosResponse<moviePutGetDTO>) => {
        const model: movieCreationDTO = {
          title: response.data.movie.title,
          inTheaters: response.data.movie.inTheaters,
          trailer: response.data.movie.trailer,
          posterURL: response.data.movie.poster,
          summary: response.data.movie.summary,
          releaseDate: new Date(response.data.movie.releaseDate),
        };
        setMovie(model);
        setMoviePutGet(response.data);
      });
  }, [id]);

  async function edit(movieToEdit: movieCreationDTO) {
    try {
      const formData = convertMovieToFormData(movieToEdit);

      await axios({
        method: "put",
        url: `${urlMovies}/${id}`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate(`/movies/${id}`);
    } catch (error: any) {
      setErrors(error);
    }
  }

  return (
    <div dir="rtl">
      <h3 dir="rtl">עריכת סרט</h3>
      <DisplayErrors errors={errors} />
      {movie && moviePutGet ? (
        <MovieForm
          model={movie}
          onSubmit={async (values) => await edit(values)}
          nonSelectedGenres={moviePutGet.nonSelectedGenres}
          selectedGenres={moviePutGet.selectedGenres}
          nonSelectedTheaters={moviePutGet.nonSelectedTheaters}
          selectedTheaters={moviePutGet.selectedTheaters}
          selectedActors={moviePutGet.actors}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}
