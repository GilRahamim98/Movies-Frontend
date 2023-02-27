import MoviesList from '../../components/MoviesList/MoviesList';
import { movieDTO } from "../../models/movies.model"

export default function Home(props: homeProps) {
    return (
        <>
            <h3 dir='rtl'>הקולנוע הישראלי</h3>
            <MoviesList movies={props.moviesList} />

            <h3 dir='rtl'>עכשיו בקולנוע</h3>
            <MoviesList movies={props.inTheaters} />
        </>

    )
}

interface homeProps {
    moviesList?: movieDTO[];
    inTheaters?: movieDTO[]
}