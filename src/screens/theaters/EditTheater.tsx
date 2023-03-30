import TheaterForm from "./TheaterForm"
import EditEntity from "../../components/entity/EditEntity";
import { urlTheaters } from "../../endpoints";
import { theaterCreationDTO, theaterDTO } from "../../models/theaters.model";

export default function EditTheater(){
    return (
        <>
        <EditEntity<theaterCreationDTO,theaterDTO> url={urlTheaters} entityName="בית קולנוע" indexURL="/theaters">
            {(entity,edit)=>
            <TheaterForm model={entity} onSubmit={async value=>{await edit(value)}}/>}
        </EditEntity>
        </>
    )
}

