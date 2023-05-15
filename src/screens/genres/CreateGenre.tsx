import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayErrors from "../../components/errors/DisplayErrors";
import { urlGenres } from "../../endpoints";
import { genreCreationDTO } from "../../models/genres.model";
import GenreForm from "./GenreForm";

export default function CreateGenre(){
    const navigate=useNavigate()
    const [errors,setErrors]=useState<string[]>([])

    async function create(genre:genreCreationDTO){
        try{
            await axios.post(urlGenres,genre)
            navigate('/genres')
        }catch(error:any){
            if(error&&error.response){
                setErrors(error.response.data)

            }
        }
    }
    return (
        <div dir='rtl'>
            <h3 dir="rtl">יצירת ז'אנר</h3>
            <DisplayErrors errors={errors}/>
            <GenreForm model={{name:''}} 
                onSubmit={async value=>{
                          await create(value);
                          
                        }}
            />

            
        </div>
    )
}