import IndexEntity from "../../components/entity/IndexEntity";
import { urlGenres } from "../../endpoints";
import { genreDTO } from "../../models/genres.model";

export default function Genres() {


    return (
        <div dir="rtl">
            <IndexEntity<genreDTO> url={urlGenres} createURL='/genres/create' title="ז'אנרים" entityName="ז'אנר">
            {(genres,buttons)=><>
                <thead>
                        <tr>
                            <th>שם</th>
                            <th></th>
                            <th></th>

                        </tr>
                        
                    </thead>
                    <tbody>
                        {genres?.map(genre=>
                            <tr key={genre.id}>
                                <td>
                                    {genre.name}
                                </td>
                                {buttons(`/genres/edit/${genre.id}`,genre.id)}
                            


                            </tr>)}
                    </tbody>
                    
        
            </>}
            
            </IndexEntity>
         
        </div>
    )

}