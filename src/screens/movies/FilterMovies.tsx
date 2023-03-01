import { Field, Form, Formik } from "formik";
import Button from "../../components/button/Button";
import { genreDTO } from "../../models/genres.model";

export default function FilterMovies(){
    const initialValues:filterMoviesForm={
        title:'',
        genreId:0,
        upcomingReleases:false,
        inTheaters:false
    }
    const genres:genreDTO[]=[{id:1,name:"דרמה"},{id:2,name:"אקשן"}]
    return (
        <div dir="rtl">
                <h3 dir='rtl'>סרטים לפי חיפוש</h3>
                <Formik initialValues={initialValues}
                        onSubmit={values=>console.log(values)}
                >
                    {(formikProps)=>(
                        <Form>
                            <div className="row gx-3 align-items-center" >
                                <div className="col-auto">
                                    <input type="text" className="form-control" id="title" placeholder="שם הסרט" {...formikProps.getFieldProps('title')} />
                                </div>
                                <div className="col-auto" dir='rtl'>
                                    <select className="form-select"
                                    {...formikProps.getFieldProps('genreId')} dir='rtl'>
                                        <option value='0' dir='rtl'>--בחרו ז'אנר--</option>
                                        {genres.map(genere=><option key={genere.id} value={genere.id} dir='rtl'>{genere.name}</option>)}
                                    </select>
                                </div>
                                <div className="col-auto" >
                                    <div className="form-check" style={{display:'flex',alignItems:'center'}}>
                                        <Field className="form-check-input" id="upcomingReleases" name="upcomingReleases" type="checkbox" style={{marginRight:'8px'}}/>
                                        <label className="form-check-label" htmlFor="upcomingReleases" style={{marginRight:'30px'}} >בקרוב בקולנוע</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check" style={{display:'flex',alignItems:'center'}}>
                                        <Field className="form-check-input" id="inTheaters" name="inTheaters" type="checkbox" style={{marginRight:'8px'}}/>
                                        <label className="form-check-label" htmlFor="inTheaters" dir="rtl" style={{marginRight:'30px'}}>בקולנוע</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Button className="btn btn-primary ms-3" onClick={()=>formikProps.submitForm()}>
                                        סנן
                                    </Button>
                                    <Button className="btn btn-danger " onClick={()=>formikProps.setValues(initialValues)}>
                                        נקה
                                    </Button>
                                </div>

                            </div>
                        </Form>
                    )}

                </Formik>

        </div>
        
    )
}

interface filterMoviesForm{
    title:string;
    genreId:number;
    upcomingReleases:boolean;
    inTheaters:boolean;
}