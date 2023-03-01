import ActorForm from "./ActorForm";

export default function EditActor(){
    return (
        <div dir='rtl'>
            <h3 dir="rtl">עריכת שחקן</h3>
            <ActorForm model={
                {
                    name:'יוסף שילוח',
                    dateOfBirth:new Date('1941-07-09T00:00:00'),
                    biography:`# שחקן 
                    הופיע המון שנים
                    `,
                    pictureUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/%D7%99%D7%95%D7%A1%D7%A3_%D7%A9%D7%99%D7%9C%D7%95%D7%97.jpg/250px-%D7%99%D7%95%D7%A1%D7%A3_%D7%A9%D7%99%D7%9C%D7%95%D7%97.jpg'
                }
            } onSubmit={values=>console.log(values)}/>

        </div>
    )
}