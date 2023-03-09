import EditEntity from "../../components/entity/EditEntity";
import { urlGenres } from "../../endpoints";
import { genreCreationDTO, genreDTO } from "../../models/genres.model";
import GenreForm from "./GenreForm";


export default function EditGenre(){

    
    return (
        <>
        <EditEntity<genreCreationDTO,genreDTO> url={urlGenres} entityName="ז'אנר" indexURL="/genres">
            {(entity,edit)=>
            <GenreForm model={entity} onSubmit={async value=>{await edit(value)}}/>}
        </EditEntity>
        </>
    )
}