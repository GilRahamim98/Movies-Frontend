import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import DisplayErrors from "../errors/DisplayErros";
import { ReactElement } from "react-markdown/lib/react-markdown";

export default function EditEntity<TCreation,TRead>(props:editEntityProps<TCreation,TRead>){

    const navigate=useNavigate();
    const {id}:any=useParams();
    const [entity,setEntity]=useState<TCreation>();
    const [errors,setErrors]=useState<string[]>([])

    useEffect(()=>{
        axios.get(`${props.url}/${id}`).then((response:AxiosResponse<TRead>)=>{
            setEntity(props.transform(response.data));

        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    async function edit(entityToEdit:TCreation) {
        try{
            await axios.put(`${props.url}/${id}`,entityToEdit);
            navigate(props.indexURL);
        }
        catch(error:any){
            if(error&&error.response){
                setErrors(error.response.data)

            }
        }
        
    }
    return (
        <div dir="rtl">
            <h3 dir="rtl"> עריכת {props.entityName}</h3>
            <DisplayErrors errors={errors}/>

            { entity?
                props.children(entity,edit):<Loader/>
            }
         
        </div>
    )

}

interface editEntityProps<TCreation,TRead>{
    url:string;
    entityName:string;
    indexURL:string;
    transform(entity:TRead):TCreation;
    children(entity:TCreation,edit:(entity:TCreation)=>void):ReactElement;
}

EditEntity.defaultProps={
    transform:(entity:any)=>entity
}