import EditEntity from "../../components/entity/EditEntity";
import { urlActors } from "../../endpoints";
import { actorCreationDTO, actorDTO } from "../../models/actors.model";
import { convertActorToFormData } from "../../utils/FormDataUtils";
import ActorForm from "./ActorForm";

export default function EditActor(){
    function transform(actor:actorDTO):actorCreationDTO{
        return{
            name:actor.name,
            pictureUrl:actor.picture,
            biography:actor.biography,
            dateOfBirth:new Date(actor.dateOfBirth)
        }

    }
    return (
        <div dir='rtl'>
            <EditEntity<actorCreationDTO,actorDTO> 
                url={urlActors} 
                entityName="שחקן" 
                indexURL="/actors"
                transform={transform}
                transformFormData={convertActorToFormData}>
            {(entity,edit)=>
            <ActorForm model={entity} onSubmit={async value=>{await edit(value)}}/>}
        </EditEntity>
           

        </div>
    )
}