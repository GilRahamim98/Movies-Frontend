import { actorMovieDTO } from "./actors.model";
import { theaterDTO } from "./theaters.model";
import { genreDTO } from "./genres.model";

export interface movieDTO{
    id:number;
    title:string;
    poster:string;
    inTheaters:boolean;
    trailer:string;
    summary?:string;
    releaseDate:Date;
    genres:genreDTO[];
    theaters:theaterDTO[];
    actors:actorMovieDTO[];
}

export interface movieCreationDTO{
    title:string;
    inTheaters:boolean;
    trailer:string;
    summary?:string;
    releaseDate?:Date;
    poster?:File;
    posterURL?:string;
    genresIds?:number[];
    theatersIds?:number[];
    actors?:actorMovieDTO[];
}

export interface landingPageDTO{
    moviesList?:movieDTO[];
    inTheaters?:movieDTO[];
}

export interface moviesPostGetDTO{
    genres:genreDTO[];
    theaters:theaterDTO[];
}

export interface moviePutGetDTO{
    movie:movieDTO;
    selectedGenres:genreDTO[];
    nonSelectedGenres:genreDTO[];
    selectedTheaters:theaterDTO[];
    nonSelectedTheaters:theaterDTO[];
    actors:actorMovieDTO[];
}