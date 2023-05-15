import axios from "axios";
import { useContext, useState } from "react";
import { authenticationResponse, userCredentials } from "../../models/auth.models";
import AuthForm from "../../components/auth/AuthForm";
import DisplayErrors from "../../components/errors/DisplayErrors";
import { urlAccounts } from "../../endpoints";
import { getClaims, saveToken } from "../../utils/handleJWT";
import AuthenticationContext from "../../components/auth/AuthenticationContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate=useNavigate()
    const[errors,setErrors]=useState<string[]>([]);
    const {update}=useContext(AuthenticationContext)

    async function login(credentials:userCredentials){
        try{
            setErrors([])
            const response=await axios.post<authenticationResponse>(`${urlAccounts}/login`,credentials);
            saveToken(response.data)
            update(getClaims());
            navigate('/')
        }
        catch(error:any){
            setErrors(error.response.data)
        }
    }
    return(
        <div dir="rtl">
        <h3>כניסה</h3>
        <DisplayErrors errors={errors}/>  

        <AuthForm model={{email:'',password:''}} onSubmit={async values=>await login(values)}/>
        </div>
    )
}