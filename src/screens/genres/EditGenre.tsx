import { useParams } from "react-router";
import GenreForm from "./GenreForm";

export default function EditGenre(){
    const {id}:any=useParams()
    return (
        <div dir="rtl">
            <h3 dir="rtl">עריכת ז'אנר</h3>
            <GenreForm model={{name:'אקשן'}} 
                onSubmit={async value=>{
                          await new Promise(r=>setTimeout(r,1))
                          console.log(id)
                          console.log(value)
                        }}
            />
        </div>
    )
}