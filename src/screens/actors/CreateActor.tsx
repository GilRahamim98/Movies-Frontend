import ActorForm from "./ActorForm";

export default function CreateActor(){
    return (
        <div dir='rtl'>
            <h3 dir="rtl">יצירת שחקן</h3>
            <ActorForm model={{name:'',dateOfBirth:undefined}} onSubmit={values=>console.log(values)}/>
        </div>
    )
}