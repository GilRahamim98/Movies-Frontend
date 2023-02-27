import { Link } from "react-router-dom";

export default function RedirectToHome(){
    return(
        <div dir="rtl">
           <h1 dir="rtl">אופס...</h1>
           <h3 dir="rtl"> העמוד שניסית להגיע אליו לא נמצא</h3>
           <Link to='/' dir="rtl">חזור למסך הבית</Link>

        
        </div>
    )
}