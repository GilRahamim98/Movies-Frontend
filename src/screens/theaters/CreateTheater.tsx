import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DisplayErrors from "../../components/errors/DisplayErrors"
import { urlTheaters } from "../../endpoints"
import { theaterCreationDTO } from "../../models/theaters.model"
import TheaterForm from "./TheaterForm"

export default function CreateTheater(){
    const navigate=useNavigate()
    const [errors,setErrors]=useState<string[]>([])

    async function create(theater:theaterCreationDTO){
        try{
            await axios.post(urlTheaters,theater)
            navigate('/theaters')
        }catch(error:any){
            if(error&&error.response){
                setErrors(error.response.data)

            }
        }
    }
    return (
        <div dir='rtl'>
            <h3 dir="rtl">יצירת בית קולנוע</h3>
            <DisplayErrors errors={errors}/>

            <TheaterForm model={{name:''}} 
                onSubmit={async values=>{
                          
                          await create(values);
                        }}
            />
        </div>
    )
}