import IndexEntity from "../../components/entity/IndexEntity";
import { urlActors } from "../../endpoints";
import { actorDTO } from "../../models/actors.model";

export default function Actors() {
    return (
        <div dir="rtl">
            <IndexEntity<actorDTO> url={urlActors} createURL='/actors/create' title="שחקנים" entityName="שחקן">
                    {(actors,buttons)=><>
                        <thead>
                        <tr>
                            <th>שם</th>
                            <th></th>
                            <th></th>

                        </tr>
                        
                    </thead>
                    <tbody>
                        {actors?.map(actor=>
                            <tr key={actor.id}>
                                <td>
                                    {actor.name}
                                </td>
                                {buttons(`/actors/edit/${actor.id}`,actor.id)}
                            


                            </tr>)}
                    </tbody>
                    </>}
            </IndexEntity>
            
        </div>
    )

}