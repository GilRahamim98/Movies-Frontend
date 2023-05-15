import {Field, ErrorMessage} from 'formik';

export default function TextField(props:textFieldProps){
    return(
        <div className="mb-3">
                        <label htmlFor={props.field}>{props.hebrewField}</label>
                        <Field type={props.type} name={props.field} id={props.field} className="form-control"/>
                        <ErrorMessage name={props.field}>{msg=><div className="text-danger">{msg}</div>}</ErrorMessage>
                    </div>
    )

}

interface textFieldProps{
    field:string;
    hebrewField:string;
    type?:string;
}

TextField.defaultPorps={
    type:'text'
}
