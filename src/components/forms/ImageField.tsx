import { useFormikContext } from "formik";
import { ChangeEvent,useState} from "react";

export default function ImageField(props:imageFieldProps){

    const [imageBase64,setImageBase64]=useState('')
    const [imageUrl,setImageUrl]=useState(props.imageUrl)
    const {values}=useFormikContext<any>()

    const divStyle={marginTop:'10px'}
    const imageStyle={width:'450px'}

    const handleOnChange=(eventsArgs:ChangeEvent<HTMLInputElement>)=>{
        if(eventsArgs.currentTarget.files){
            const file=eventsArgs.currentTarget.files[0]
            if(file){
                toBase64(file).then((base64Representation:string)=>setImageBase64(base64Representation)).catch(err=>console.error(err))
                values[props.field]=file
                setImageUrl('')
            }else{
                setImageBase64('')

            }
        }
    }
    const toBase64=(file:File)=>{
        return new Promise<string>((res,rej)=>{
            const reader=new FileReader()
            reader.readAsDataURL(file)
            reader.onload=()=>res(reader.result as string)
            reader.onerror=(error)=>rej(error)
        })
    }
    return(
        <div className="mb-3">
            <label>{props.hebrewField}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={handleOnChange}/>
            </div>
            {imageBase64 ?
                <div>
                    <div style={divStyle}>
                        <img style={imageStyle} src={imageBase64} alt="selected pic"/>
                    </div>

                </div>:null
            }
             {imageUrl ?
                <div>
                    <div style={divStyle}>
                        <img style={imageStyle} src={imageUrl} alt="selected pic"/>
                    </div>

                </div>:null
            }
        </div>
    )
}


interface imageFieldProps{
    hebrewField:string;
    imageUrl:string;
    field:string;
}

ImageField.defaultProps={
    imageUrl:''
}