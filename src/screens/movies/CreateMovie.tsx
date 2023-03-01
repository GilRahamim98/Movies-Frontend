import { genreDTO } from "../../models/genres.model";
import { theaterDTO } from "../../models/theaters.model";
import MovieForm from "./MovieForm";

export default function CreateMovie(){
    const nonSelectedGenres:genreDTO[]=[{id:1,name:"דרמה"},{id:2,name:"אקשן"}]
    const nonSelectedTheaters:theaterDTO[]=[{id:1,name:"יס פלאנט"},{id:2,name:"סינמה סיטי"}]

    return (
        <div dir="rtl">
            <h3 dir="rtl">יצירת סרט</h3>
            <MovieForm 
            model={{title:'',inTheateres:false,trailer:'',posterURL:''}} 
            onSubmit={values=>console.log(values)}
            nonSelectedGenres={nonSelectedGenres}
            selectedGenres={[]}
            nonSelectedTheaters={nonSelectedTheaters}
            selectedTheaters={[]}
            selectedActors={[]}
            />
        </div>
    )
}