import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../../endpoints";
import { genreDTO } from "../../models/genres.model";

export default function Genres() {
    useEffect(()=>{        
        axios.get(urlGenres)
                .then((response:AxiosResponse<genreDTO[]>)=>{
                    console.log(response.data);
                    
                })

    },[])
    return (
        <div dir="rtl">
            <h2 dir="rtl">ז'אנרים</h2>
            <Link className="btn btn-dark" to='/genres/create' dir="rtl">יצירת ז'אנר</Link>

        </div>
    )

}