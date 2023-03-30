import { Link } from "react-router-dom";
import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "../../models/movies.model";
import * as Yup from 'yup';
import TextField from "../../components/forms/TextField";
import Button from "../../components/button/Button";
import DateField from "../../components/forms/DateField";
import ImageField from "../../components/forms/ImageField";
import CheckboxField from "../../components/forms/CheckboxField";
import MultipleSelector,{multipleSelectorModel} from "../../components/forms/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../../models/genres.model";
import { theaterDTO } from "../../models/theaters.model";
import TypeAheadActors from "../../components/forms/TypeAheadActors";
import { actorMovieDTO } from "../../models/actors.model";
import MarkdownField from "../../components/forms/MarkdownField";

export default function MovieForm(props:movieFormProps){
    const[selectedGenres,setSelectedGenres]=useState(mapToModel(props.selectedGenres));
    const[nonSelectedGenres,setNonSelectedGenres]=useState(mapToModel(props.nonSelectedGenres));

    const[selectedTheaters,setSelectedTheaters]=useState(mapToModel(props.selectedTheaters));
    const[nonSelectedTheaters,setNonSelectedTheaters]=useState(mapToModel(props.nonSelectedTheaters));

    const[selectedActors,setSelectedActors]=useState(props.selectedActors)

    function mapToModel(items:{id:number,name:string}[]):multipleSelectorModel[]{
        return items.map(item=>{
            return {key:item.id,value:item.name}
        })
    }
    return(
        <Formik initialValues={props.model}
                onSubmit={(values,actions)=>{
                    values.genresIds=selectedGenres.map(item=>item.key);
                    values.theatersIds=selectedTheaters.map(item=>item.key);
                    values.actors=selectedActors;

                    props.onSubmit(values,actions)
                }}
                validationSchema={Yup.object({
                    title:Yup.string().required('זהו שדה חובה!')
                })}
        >
            {(formikProps)=>(
                <Form>
                <TextField field="title" hebrewField="שם הסרט"/>
                <CheckboxField hebrewField="בקרנים" field="inTheaters"/>
                <TextField field="trailer" hebrewField="טריילר"/>
                <DateField hebrewField="תאריך יציאה לקרנים" field="releaseDate"/>
                <ImageField hebrewField="פוסטר" field="poster" imageUrl={props.model.posterURL}/>
                <MarkdownField hebrewField="תקציר" field="summary"/>
                <MultipleSelector hebrewField="ז'אנרים" nonSelected={nonSelectedGenres} selected={selectedGenres} 
                onChange={(selected,nonSelected)=>{
                    setSelectedGenres(selected)
                    setNonSelectedGenres(nonSelected)
                }}
                    />
                    <MultipleSelector hebrewField="בתי קולנוע" nonSelected={nonSelectedTheaters} selected={selectedTheaters} 
                onChange={(selected,nonSelected)=>{
                    setSelectedTheaters(selected)
                    setNonSelectedTheaters(nonSelected)
                }}
                    />
                    <TypeAheadActors 
                            actors={selectedActors}
                            hebrewField="שחקנים"
                            onAdd={actors=>{setSelectedActors(actors)}}
                            onRemove={actor=>{
                                const actors=selectedActors.filter(x=>x!==actor)
                                setSelectedActors(actors)
                            }}
                            listUI={(actor:actorMovieDTO)=>
                                <>
                                    {actor.name} / <input placeholder="תפקיד" type='text' value={actor.character} 
                                    onChange={e=>{
                                        const index=selectedActors.findIndex(x=>x.id===actor.id)
                                        const actors=[...selectedActors]
                                        actors[index].character=e.currentTarget.value;
                                        setSelectedActors(actors)

                                    }}/>
                                </>
                            }
                    />

                <Link className="btn btn-outline-secondary" to="/">חזור</Link>
                <Button disabled={formikProps.isSubmitting} type='submit'>שמור שינויים</Button>

            </Form>
            )}
        </Formik>
    )

}


interface movieFormProps{
    model:movieCreationDTO;
    onSubmit(values:movieCreationDTO,action:FormikHelpers<movieCreationDTO>):void;
    selectedGenres:genreDTO[];
    nonSelectedGenres:genreDTO[];
    selectedTheaters:theaterDTO[];
    nonSelectedTheaters:theaterDTO[];
    selectedActors:actorMovieDTO[];

}