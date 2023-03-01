import { Form, Formik,FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../../components/button/Button";
import MapField from "../../components/forms/MapField";
import TextField from "../../components/forms/TextField";
import { coordinateDTO } from "../../models/coordinates.model";
import { theaterCreationDTO } from "../../models/theaters.model";

export default function TheaterForm(props:theaterForm){
    function transformCoordinates():coordinateDTO[]|undefined {
        if(props.model.latitude&&props.model.longitude){
            const response:coordinateDTO={lat:props.model.latitude,lng:props.model.longitude}
            return [response]
        }
        return undefined

    }
    return(
        <Formik initialValues={props.model}
                onSubmit={props.onSubmit}
            validationSchema={Yup.object({
            name:Yup.string().required('זהו שדה חובה!')
             })}
        >
            {(formikProps)=>(
                <Form>
                    <TextField hebrewField="שם" field="name"/>
                    <div style={{marginBottom:'1rem'}}>
                        <MapField latField="latitude" lngField="longitude" coordinates={transformCoordinates()}/>
                    </div>
                    <Link className="btn btn-outline-secondary" to="/theaters">חזור</Link>

                    <Button disabled={formikProps.isSubmitting} type='submit'>
                        שמור שינויים
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

interface theaterForm{
    model:theaterCreationDTO;
    onSubmit(values:theaterCreationDTO,action:FormikHelpers<theaterCreationDTO>):void;

}