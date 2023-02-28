import GenreForm from "./GenreForm";

export default function CreateGenre(){
    return (
        <div dir='rtl'>
            <h3 dir="rtl">יצירת ז'אנר</h3>
            <GenreForm model={{name:''}} 
                onSubmit={async value=>{
                          await new Promise(r=>setTimeout(r,1))
                          console.log(value)
                        }}
            />

            
        </div>
    )
}