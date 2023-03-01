import MovieForm from "./MovieForm";
import { genreDTO } from "../../models/genres.model";
import { theaterDTO } from "../../models/theaters.model";
import { actorMovieDTO } from "../../models/actors.model";

export default function EditMovie(){
    const nonSelectedGenres:genreDTO[]=[{id:2,name:"אקשן"}]
    const selectedGenres:genreDTO[]=[{id:1,name:"דרמה"}]
    const nonSelectedTheaters:theaterDTO[]=[{id:2,name:"סינמה סיטי"}]
    const selectedTheaters:theaterDTO[]=[{id:1,name:"יס פלאנט"}]

    const selectedActors:actorMovieDTO[]=[ {
        id:2, name:'אבי קושניר',character:'מומו',picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZZ-Khww9e-Squip_1AZYLik17Oht0BSachn9hTrUDyPkn6RE4YM_&s=0'
    }]


    return (
        <div dir="rtl">
            <h3 dir="rtl">עריכת סרט</h3>
            <MovieForm 
            model={
                {
                    title:'אלכס חולה אהבה',
                    inTheateres:false,
                    trailer:'קישור לסרט',
                    releaseDate:new Date('1986-01-01T00:00:00'),
                    posterURL:'https://upload.wikimedia.org/wikipedia/he/d/d1/%D7%90%D7%9C%D7%9B%D7%A1_%D7%97%D7%95%D7%9C%D7%94_%D7%90%D7%94%D7%91%D7%94_%D7%9B%D7%A8%D7%96%D7%94_%D7%A7%D7%95%D7%9C%D7%A0%D7%95%D7%A2%D7%99%D7%AA.JPG'
                }
            } 
            onSubmit={values=>console.log(values)}
            nonSelectedGenres={nonSelectedGenres}
            selectedGenres={selectedGenres}
            nonSelectedTheaters={nonSelectedTheaters}
            selectedTheaters={selectedTheaters}
            selectedActors={selectedActors}
            />
        </div>
    )
}