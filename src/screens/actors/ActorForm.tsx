import { Form, Formik, FormikHelpers } from "formik"
import { actorCreationDTO } from "../../models/actors.model"
import TextField from "../../components/forms/TextField";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import DateField from "../../components/forms/DateField";
import ImageField from "../../components/forms/ImageField";
import MarkdownField from "../../components/forms/MarkdownField";

export default function ActorForm(props:actorFormProps){
    return(
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name:Yup.string().required('זהו שדה חובה!'),
            dateOfBirth:Yup.date().nullable().required('זהו שדה חובה!')
        })}
        >
            {(formikProps)=>(
                <Form>
                    <TextField hebrewField=" שם השחקן" field="name"/>
                    <DateField hebrewField="תאריך לידה" field="dateOfBirth"/>
                    <ImageField hebrewField="תמונה" field="picture" imageUrl={props.model.pictureUrl} />
                    <MarkdownField hebrewField="ביוגרפיה" field="biography"/>
                    <Link to='/actors' className="btn btn-outline-secondary">בטל</Link>
                    <Button disabled={formikProps.isSubmitting} type="submit">שמור שינויים</Button>
                </Form>
            )}

        </Formik>
    )
}

interface actorFormProps{
    model:actorCreationDTO;
    onSubmit(values:actorCreationDTO,action:FormikHelpers<actorCreationDTO>):void;
}