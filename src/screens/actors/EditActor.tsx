import ActorForm from "./ActorForm";

export default function EditActor(){
    return (
        <div dir='rtl'>
            <h3 dir="rtl">עריכת שחקן</h3>
            <ActorForm model={{name:'יוסף שילוח',dateOfBirth:new Date('1941-07-09T00:00:00')}} onSubmit={values=>console.log(values)}/>

        </div>
    )
}