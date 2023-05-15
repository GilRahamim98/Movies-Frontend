import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayErrors from "../../components/errors/DisplayErrors";
import Loader from "../../components/loader/Loader";
import { urlMovies } from "../../endpoints";
import { genreDTO } from "../../models/genres.model";
import { movieCreationDTO, moviesPostGetDTO } from "../../models/movies.model";
import { theaterDTO } from "../../models/theaters.model";
import { convertMovieToFormData } from "../../utils/FormDataUtils";
import MovieForm from "./MovieForm";

export default function CreateMovie(){
    
    const navigate=useNavigate()
    const [nonSelectedGenres,setNonSelectedGenres]=useState<genreDTO[]>([])
    const [nonSelectedTheaters,setNonSelectedTheaters]=useState<theaterDTO[]>([])
    const [errors,setErrors]=useState<string[]>([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        axios.get(`${urlMovies}/postget`)
        .then((response:AxiosResponse<moviesPostGetDTO>)=>{
            setNonSelectedGenres(response.data.genres)
            setNonSelectedTheaters(response.data.theaters)
            setLoading(false)

        })
    },[])

   async function create(movie:movieCreationDTO) {
    try{
        const formData=convertMovieToFormData(movie);
        
        const response=await axios({
            method:'post',
            url:urlMovies,
            data:formData,
            headers:{'Content-Type':'multipart/form-data'}
        })
        navigate(`/movies/${response.data}`);
    }catch(error:any){
        setErrors(error.response.data)

    }
    
   }

    return (
        <div dir="rtl">
            <h3 dir="rtl">יצירת סרט</h3>
            <DisplayErrors errors={errors}/>
            {loading? <Loader/>:
            <MovieForm 
            model={{title:'',inTheaters:false,trailer:'',posterURL:''}} 
            onSubmit={async values=>await create(values)}
            nonSelectedGenres={nonSelectedGenres}
            selectedGenres={[]}
            nonSelectedTheaters={nonSelectedTheaters}
            selectedTheaters={[]}
            selectedActors={[]}
            />}
        </div>
    )
}