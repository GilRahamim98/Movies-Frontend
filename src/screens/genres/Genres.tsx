import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import GenericeList from "../../components/genericList/GenericeList";
import Pagination from "../../components/pagination/Pagination";
import RecordsPerPageSelect from "../../components/recordsPerPage/RecordsPerPageSelect";
import { urlGenres } from "../../endpoints";
import { genreDTO } from "../../models/genres.model";

export default function Genres() {
    const [genres,setGenres]=useState<genreDTO[]>();
    const [totalAmountOfPages,setTotalAmountOfPages]=useState(0);
    const [recordsPerPage,setRecordsPerPage]=useState(5);
    const [page,setPage]=useState(1);
    useEffect(()=>{        
        axios.get(urlGenres,{
            params:{page,recordsPerPage}
        })
                .then((response:AxiosResponse<genreDTO[]>)=>{
                    const totalAmountOfRecords=parseInt(response.headers['totalamountofrecords'],10)
                    setTotalAmountOfPages(Math.ceil(totalAmountOfRecords/recordsPerPage))
                    setGenres(response.data);
                    
                })

    },[page,recordsPerPage])
    return (
        <div dir="rtl">
            <h2 dir="rtl">ז'אנרים</h2>
            <Link className="btn btn-dark" to='/genres/create' dir="rtl">יצירת ז'אנר</Link>
            <RecordsPerPageSelect onChange={amountOfRecords=>{
                setPage(1);
                setRecordsPerPage(amountOfRecords);
            }}/>
            <Pagination currentPage={page} totalAmountOfPages={totalAmountOfPages} onChange={newPage=>setPage(newPage)} />
            
            <GenericeList list={genres}>
                <table className="table table-striped">
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
                                <td>
                                <Link className="btn btn-success" to={`/genres/${genre.id}`}>
                                    ערוך
                                </Link>
                                </td>
                                <td>
                                <Button className="btn btn-danger">מחק</Button>

                                </td>
                                


                            </tr>)}
                    </tbody>
                    
                </table>
            </GenericeList>
        </div>
    )

}