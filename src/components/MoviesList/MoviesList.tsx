import { movieDTO } from "../../models/movies.model"
import IndividualMovie from "../IndividualMovie/IndividualMovie"
import css from './MoviesList.module.css'
import GenericeList from "../GenericList/GenericeList"
export default function MoviesList(props: moviesListProps) {
    return (
        <GenericeList list={props.movies}>
            <div className={css.div} dir='rtl'>
                {props.movies?.map(movie => <IndividualMovie {...movie} key={movie.id} />)}

            </div>
        </GenericeList>
    )

}

interface moviesListProps {
    movies?: movieDTO[]
}