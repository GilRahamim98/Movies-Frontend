import IndexEntity from "../../components/entity/IndexEntity";
import { urlTheaters } from "../../endpoints";
import { theaterDTO } from "../../models/theaters.model";

export default function Theaters() {
    return (
        <div dir="rtl">
              <IndexEntity<theaterDTO> url={urlTheaters} createURL='/theaters/create' title="בתי קולנוע" entityName="בית קולנוע">
            {(theaters,buttons)=><>
                <thead>
                        <tr>
                            <th>שם</th>
                            <th></th>
                            <th></th>

                        </tr>
                        
                    </thead>
                    <tbody>
                        {theaters?.map(theater=>
                            <tr key={theater.id}>
                                <td>
                                    {theater.name}
                                </td>
                                {buttons(`/theaters/edit/${theater.id}`,theater.id)}
                            


                            </tr>)}
                    </tbody>
                    
        
            </>}
            
            </IndexEntity>
           

        </div>
    )

}

