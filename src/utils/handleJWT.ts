import { authenticationResponse, claim } from "../models/auth.models";

const TOKEN_KEY="token";
const EXPIRATION_KEY="token-expiration";

export function saveToken(authData:authenticationResponse){
    localStorage.setItem(TOKEN_KEY,authData.token);
    localStorage.setItem(EXPIRATION_KEY,authData.expiration.toString());
}

export function getClaims():claim[]{
    const token=localStorage.getItem(TOKEN_KEY);
    if(!token){
        return [];
    }

    const expiration=localStorage.getItem(EXPIRATION_KEY)!;
    const expirationDate=new Date(expiration);
    
    if(expirationDate<=new Date()){
        logout()
        return [];
    }
    const dataToken=JSON.parse(atob(token.split('.')[1]));
    
    const response:claim[]=[];
    for(const property in dataToken){
        response.push({name:property,value:dataToken[property]})
    }
    
    return response;
}

export function logout(){
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(EXPIRATION_KEY);

}


export function getToken(){
    return localStorage.getItem(TOKEN_KEY)
}