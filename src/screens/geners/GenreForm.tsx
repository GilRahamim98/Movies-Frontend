import { Link } from "react-router-dom";
import {Formik,Form, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import TextField from "../../components/forms/TextField";
import Button from "../../components/button/Button";
import { genreCreationDTO } from "../../models/genres.model";

export default function GenreForm(props:genreFormProps){
    return(
        <Formik initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name:Yup.string().required('זהו שדה חובה!')
        })}
        >
            {(formikProps)=>(
                <Form>
                <TextField field="name" hebrewField="שם הז'אנר"/>
                <Link className="btn btn-outline-secondary" to="/genres">חזור</Link>
                <Button disabled={formikProps.isSubmitting} type='submit'>שמור שינויים</Button>

            </Form>
            )}
            

        </Formik>
    )
}

interface genreFormProps{
    model:genreCreationDTO;
    onSubmit(values:genreCreationDTO,action:FormikHelpers<genreCreationDTO>):void;
}