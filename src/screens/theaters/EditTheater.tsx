import TheaterForm from "./TheaterForm"

export default function EditTheater(){
    return (
        <div dir="rtl">
            <h3 dir="rtl">עריכת בית קולנוע</h3>
            <TheaterForm model={{name:'יס פלאנט',latitude: 31.97966193035062, longitude: 34.74773615598679}} 
                onSubmit={async value=>{
                          await new Promise(r=>setTimeout(r,1))
                          console.log(value)
                        }}
            />
        </div>
    )
}