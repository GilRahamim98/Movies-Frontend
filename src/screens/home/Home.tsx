import { useState, useEffect } from 'react';
import MoviesList from '../../components/moviesList/MoviesList';
import { landingPageDTO } from "../../models/movies.model"

export default function Home() {
    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
     
    },[])
  
    return (
        <>
            <h3 dir='rtl'>הקולנוע הישראלי</h3>
            <MoviesList movies={movies.moviesList} />

            <h3 dir='rtl'>עכשיו בקולנוע</h3>
            <MoviesList movies={movies.inTheaters} />
        </>

    )
}

