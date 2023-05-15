import axios from "axios";
import { useContext,useState } from "react";
import AuthForm from "../../components/auth/AuthForm";
import DisplayErrors from "../../components/errors/DisplayErrors";
import { urlAccounts } from "../../endpoints";
import { authenticationResponse, userCredentials } from "../../models/auth.models";
import { getClaims,saveToken } from "../../utils/handleJWT";
import AuthenticationContext from "../../components/auth/AuthenticationContext";
import { useNavigate } from "react-router-dom";


export default function Register(){
    const navigate=useNavigate()
    const[errors,setErrors]=useState<string[]>([]);
    const {update}=useContext(AuthenticationContext)

    async function register(credentials:userCredentials) {
        try{
            setErrors([])
            const response=await axios.post<authenticationResponse>(`${urlAccounts}/create`,credentials);
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
        <h3>הירשם</h3>
        <DisplayErrors errors={errors}/>  
        <AuthForm model={{email:'',password:''}} onSubmit={async values=>await register(values)}/>
        
        </div>
    )
}