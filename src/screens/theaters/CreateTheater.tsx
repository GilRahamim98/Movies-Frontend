import TheaterForm from "./TheaterForm"

export default function CreateTheater(){
    return (
        <div dir='rtl'>
            <h3 dir="rtl">יצירת בית קולנוע</h3>
            <TheaterForm model={{name:''}} 
                onSubmit={async value=>{
                          await new Promise(r=>setTimeout(r,1))
                          console.log(value)
                        }}
            />
        </div>
    )
}