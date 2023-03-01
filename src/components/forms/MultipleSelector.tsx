import './MultipleSelector.css'
export default function MultipleSelector(props:multipleSelectorProps){

    function select(item:multipleSelectorModel){
        const selected=[...props.selected,item]
        const nonSelected=props.nonSelected.filter(val=>val!==item)
        props.onChange(selected,nonSelected)
    }
    function unselect(item:multipleSelectorModel){
        const nonSelected=[...props.nonSelected,item]
        const selected=props.selected.filter(val=>val!==item)
        props.onChange(selected,nonSelected)
    }
    function selectAll(){
        const selected=[...props.selected,...props.nonSelected]
        const nonSelected :multipleSelectorModel[]=[]
        props.onChange(selected,nonSelected)
    }
    function unselectAll(){
        const nonSelected=[...props.nonSelected,...props.selected]
        const selected :multipleSelectorModel[]=[]
        props.onChange(selected,nonSelected)
    }

    return(
        <div className="mb-3">
            <label>{props.hebrewField}</label>
             <div className="multiple-selector">
            <ul>
                {props.nonSelected.map(item=>
                    <li key={item.key} onClick={()=>{select(item)}}>{item.value}</li>)}
            </ul>
            <div className="multiple-selector-buttons">
                <button type="button" onClick={selectAll}>{'>>'}</button>
                <button type="button" onClick={unselectAll}>{'<<'}</button>

            </div>
            <ul>
                {props.selected.map(item=>
                    <li key={item.key} onClick={()=>{unselect(item)}}>{item.value}</li>)}
            </ul>

        </div>

        </div>
       
    )

}


interface multipleSelectorProps{
    hebrewField:string;
    selected:multipleSelectorModel[];
    nonSelected:multipleSelectorModel[];
    onChange(selected:multipleSelectorModel[],nonSelected:multipleSelectorModel[]):void
}

export interface multipleSelectorModel{
    key:number;
    value:string;
}