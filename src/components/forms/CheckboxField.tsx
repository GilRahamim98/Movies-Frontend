import { Field } from "formik";
import './CheckBoxField.css'
export default function CheckboxField(props:checkboxFieldProps){
    return (
        <div className="mb-3 form-check" dir="rtl" >
            <Field className="form-check-input" id={props.field} name={props.field} type="checkbox"/>
            <label htmlFor={props.field} dir="rtl">{props.hebrewField}</label>

        </div>
    )

}


interface checkboxFieldProps{
    field:string;
    hebrewField:string;
}