import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

export default function CreateGenre(){
    const navigate=useNavigate()
    return (
        <div dir='rtl'>
            <h3 dir="rtl">יצירת ז'אנר</h3>
            <Button onClick={()=>{
                //save in database
                navigate('/genres')


            }}>שמור שינויים</Button>
        </div>
    )
}