import { movieDTO } from "../../models/movies.model"
import IndividualMovie from "../IndividualMovie/IndividualMovie"
import css from './MoviesList.module.css'
import Loader from "../Loader/Loader"
export default function MoviesList(props:moviesListProps){

    if(!props.movies){
        return <Loader/>
    }else if(props.movies.length===0){
        return <>There are no movies to display.</>
    }else{
        return (
            <div className={css.div} dir='rtl'>
            {props.movies.map(movie=><IndividualMovie {...movie} key={movie.id}/>)}
    
            </div>
    
        )
    }

}

interface moviesListProps{
    movies?:movieDTO[]
}