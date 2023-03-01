import { actorMovieDTO } from "./actors.model";

export interface movieDTO{
    id:number;
    title:string;
    poster:string;
}

export interface movieCreationDTO{
    title:string;
    inTheateres:boolean;
    trailer:string;
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