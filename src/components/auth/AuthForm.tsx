import {Form,Formik,FormikHelpers } from "formik";
import { userCredentials } from "../../models/auth.models"
import * as Yup from 'yup'
import TextField from "../forms/TextField";
import Button from "../button/Button";
import { Link } from "react-router-dom";

export default function AuthForm(props:authFormProps){
    return(
        <Formik initialValues={props.model} onSubmit={props.onSubmit} validationSchema={Yup.object({
            email:Yup.string().required('זהו שדה חובה!').email('אנא הזינו דואר אלקטרוני תקין'),
            password:Yup.string().required('זהו שדה חובה!')
        })}>
            {formikProps=>(
                <Form>
                    <TextField hebrewField="דואר אלקטרוני" field="email"/>
                    <TextField hebrewField="סיסמא" field="password" type="password"/>
                    <Link className="btn btn-secondary" to="/">בטל</Link>
                    <Button disabled={formikProps.isSubmitting} type="submit">שלח</Button>

                </Form>
            )}

        </Formik>

    )
}

interface authFormProps{
    model:userCredentials;
    onSubmit(values:userCredentials,actions:FormikHelpers<userCredentials>):void;
}