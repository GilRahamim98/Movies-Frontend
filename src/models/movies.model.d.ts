export interface movieDTO{
    id:number;
    title:string;
    poster:string;
}

export interface landingPageDTO{
    moviesList?:movieDTO[];
    inTheaters?:movieDTO[];
}