import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import Button from "../../components/button/Button";
import { genreDTO } from "../../models/genres.model";
import axios, { AxiosResponse } from "axios";
import { urlGenres, urlMovies } from "../../endpoints";
import { movieDTO } from "../../models/movies.model";
import MoviesList from "../../components/moviesList/MoviesList";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

export default function FilterMovies(){
    const navigate=useNavigate()
    const initialValues:filterMoviesForm={
        title:'',
        genreId:0,
        inTheaters:false,
        page:1,
        recordsPerPage:10
    }
    const[genres,setGenres]=useState<genreDTO[]>([])
    const[movies,setMovies]=useState<movieDTO[]>([])
    const query=new URLSearchParams(useLocation().search)
    const [totalAmountOfPages,setTotalAmountOfPages]=useState(0)

    useEffect(()=>{
        axios.get(`${urlGenres}/all`).then((response:AxiosResponse<genreDTO[]>)=>{
            setGenres(response.data)

        })

    },[])
    useEffect(()=>{
        if(query.get('title')){
            initialValues.title=query.get('title')!
        }
        if(query.get('genreId')){
            initialValues.genreId=parseInt(query.get('genreId')!,10)
        }
        if(query.get('inTheaters')){
            initialValues.inTheaters=true
        }
        if(query.get('page')){
            initialValues.page=parseInt(query.get('page')!,10)
        }

        
        searchMovies(initialValues)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function searchMovies(values:filterMoviesForm){
        modifyURL(values)
        axios.get(`${urlMovies}/filter`,{params:values}).then((response:AxiosResponse<movieDTO[]>)=>{
            const records=parseInt(response.headers['totalamountofrecords'],10)
            setTotalAmountOfPages(Math.ceil(records/values.recordsPerPage))
            setMovies(response.data)

        })
    }
    function modifyURL(values:filterMoviesForm){
        const queryStrings:string[]=[];
        if(values.title){
            queryStrings.push(`title=${values.title}`)
        }
        if(values.genreId!==0){
            queryStrings.push(`genreId=${values.genreId}`)
        }
        if(values.inTheaters){
            queryStrings.push(`inTheaters=${values.inTheaters}`)
        }
        queryStrings.push(`page=${values.page}`)
        navigate(`/movies/filter?${queryStrings.join('&')}`)
    }
    return (
        <div dir="rtl">
                <h3 dir='rtl'>סרטים לפי חיפוש</h3>
                <Formik initialValues={initialValues}
                        onSubmit={ values=>{values.page=1; searchMovies(values)}}
                >
                    {(formikProps)=>(
                        <>
                        <Form>
                            <div className="row gx-3 align-items-center mb-3" >
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
                                
                                <div className="col-auto">
                                    <div className="form-check" >
                                        <Field className="form-check-input" id="inTheaters" name="inTheaters" type="checkbox" style={{marginRight:'8px'}}/>
                                        <label className="form-check-label" htmlFor="inTheaters" dir="rtl" style={{marginRight:'30px'}}>בקולנוע</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Button className="btn btn-primary ms-3" onClick={()=>formikProps.submitForm()}>
                                        סנן
                                    </Button>
                                    <Button className="btn btn-danger " onClick={()=>{
                                        formikProps.setValues(initialValues);
                                        searchMovies(initialValues)
                                        
                                        }}>
                                        נקה
                                    </Button>
                                </div>

                            </div>
                        </Form>
                        <MoviesList movies={movies}/>
                        <Pagination totalAmountOfPages={totalAmountOfPages} currentPage={formikProps.values.page}
                            onChange={newPage=>{
                                formikProps.values.page=newPage;
                                searchMovies(formikProps.values)
                            }}
                        />
                        </>
                    )}

                </Formik>

        </div>
        
    )
}

interface filterMoviesForm{
    title:string;
    genreId:number;
    inTheaters:boolean;
    page:number;
    recordsPerPage:number;
}