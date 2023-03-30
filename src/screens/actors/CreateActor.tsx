import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { actorCreationDTO } from "../../models/actors.model";
import ActorForm from "./ActorForm";
import DisplayErrors from "../../components/errors/DisplayErros";
import { convertActorToFormData } from "../../utils/FormDataUtils";
import { urlActors } from "../../endpoints";


export default function CreateActor(){
    const navigate=useNavigate()
    const [errors,setErrors]=useState<string[]>([])

    async function createActor(actor:actorCreationDTO) {
        try{
            const formData=convertActorToFormData(actor);
            await axios({
                method:'post',
                url:urlActors,
                data:formData,
                headers:{'Content-Type':'multipart/form-data'}
            })
            navigate('/actors')
            

        }catch(error:any){
            if(error&&error.response){
                setErrors(error.response.data)

            }
        }
        
    }
    return (
        <div dir='rtl'>
            <h3 dir="rtl">יצירת שחקן</h3>
            <DisplayErrors errors={errors}/>
            <ActorForm model={{name:'',dateOfBirth:undefined}} 
                       onSubmit={async(values)=>await createActor(values)}/>
        </div>
    )
}