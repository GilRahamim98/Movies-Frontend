import axios,{ AxiosResponse } from "axios";
import { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { urlActors } from "../../endpoints";
import { actorMovieDTO } from "../../models/actors.model";

export default function TypeAheadActors(props:typeAheadActorsProps){

    const[actors,setActors]=useState<actorMovieDTO[]>([]);
    const [isLoading,setIsLoading]=useState(false);

    const selected:actorMovieDTO[]=[];

    const [draggedElement,setDraggedElement]=useState<actorMovieDTO|undefined>(undefined)

    function handleSearch(query:string){
        setIsLoading(true);
        axios.get(`${urlActors}/searchByName/${query}`)
        .then((response:AxiosResponse<actorMovieDTO[]>)=>{
            setActors(response.data);
            setIsLoading(false);
        })

    }

    function handleDragStart(actor:actorMovieDTO){
        setDraggedElement(actor)
    }

    function handleDragOver(actor:actorMovieDTO){
        if(!draggedElement){
            return;
        }
        if(actor.id!==draggedElement.id){
            const draggedElementIndex=props.actors.findIndex(x=>x.id===draggedElement.id);
            const actorIndex=props.actors.findIndex(x=>x.id===actor.id);

            const actors=[...props.actors];
            actors[actorIndex]=draggedElement;
            actors[draggedElementIndex]=actor;
            props.onAdd(actors);

        }
    }


    
    return(
        <div className="mb-3" dir="rtl">
            <label>{props.hebrewField}</label>
            <AsyncTypeahead 
                id="typeahead"
                onChange={actors=>{
                    if(props.actors.findIndex(x=>x.id===(actors[0] as actorMovieDTO).id)===-1){
                        (actors[0] as actorMovieDTO).character="";
                        props.onAdd([...props.actors,(actors[0] as actorMovieDTO)])
                    }
                }}
                options={actors}
                labelKey={actor=>(actor as actorMovieDTO).name}
                filterBy={()=>true}
                isLoading={isLoading}
                onSearch={handleSearch}
                placeholder="שם השחקן..."
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={actor=>(
                    <div dir="rtl">
                        <img alt="actor" src={(actor as actorMovieDTO).picture} style={{height:'64px',marginRight:'10px',width:'64px'}} dir="rtl"/>
                        <span dir="rtl">{(actor as actorMovieDTO).name}</span>
                    </div>
                )}
            />
            <ul className="list-group" style={{paddingRight:'0.1rem'}}>
                {props.actors.map(actor=>
                    <li key={actor.id}  draggable={true} onDragStart={()=>handleDragStart(actor)} onDragOver={()=>handleDragOver(actor)} className="list-group-item list-group-item-action">
                        {props.listUI(actor)} 
                        <span className="badge badge-primary badge-pill pointer text-dark" style={{marginLeft:'0.5rem'}} onClick={()=>props.onRemove(actor)}>X</span>
                    </li> )}
            </ul>
        </div>
    )
}

interface typeAheadActorsProps{
    hebrewField:string;
    actors:actorMovieDTO[];
    onAdd(actors:actorMovieDTO[]):void;
    onRemove(actor:actorMovieDTO):void;
    listUI(actor:actorMovieDTO):ReactElement;
}