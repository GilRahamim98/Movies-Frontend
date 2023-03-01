import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { actorMovieDTO } from "../../models/actors.model";

export default function TypeAheadActors(props:typeAheadActorsProps){
    const actors:actorMovieDTO[]=[
            {
                id:1, name:'יוסף שילוח',character:'',picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2_G9HwaREbffI6IYwVufUunmIhQAN7D7Uiexl_6mDFmKXG-cmYjr&s=0'
            },
            {
                id:2, name:'אבי קושניר',character:'',picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZZ-Khww9e-Squip_1AZYLik17Oht0BSachn9hTrUDyPkn6RE4YM_&s=0'
            },
            {
                id:3, name:'אורי כבירי',character:'',picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlu925kYDjynxBGD0lYlHWMV1gm1b5f5Uxl6zX1DI&s=10'
            }
    ]
    
    const selected:actorMovieDTO[]=[];

    const [draggedElement,setDraggedElement]=useState<actorMovieDTO|undefined>(undefined)

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
            <Typeahead 
                id="typeahead"
                onChange={actors=>{
                    if(props.actors.findIndex(x=>x.id===(actors[0] as actorMovieDTO).id)===-1){
                        props.onAdd([...props.actors,(actors[0] as actorMovieDTO)])
                    }
                    console.log(actors)
                }}
                options={actors}
                labelKey={actor=>(actor as actorMovieDTO).name}
                filterBy={['name']}
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