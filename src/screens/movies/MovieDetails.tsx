import { Link } from "react-router-dom"
import axios,{ AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../components/loader/Loader"
import { urlMovies } from "../../endpoints"
import { movieDTO } from "../../models/movies.model"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { coordinateDTO } from "../../models/coordinates.model"
import Map from "../../components/map/Map"

export default function MovieDetails(){
    const {id}:any=useParams()
    const [movie,setMovie]=useState<movieDTO>()

    useEffect(()=>{
        axios.get(`${urlMovies}/${id}`)
            .then((response:AxiosResponse<movieDTO>)=>{
                response.data.releaseDate=new Date(response.data.releaseDate)
                setMovie(response.data)
            })
    },[id])

    function transformCoordinates():coordinateDTO[]{
        if(movie?.theaters){
            const coordinates=movie.theaters.map(theater=>{
                return {lat:theater.latitude,lng:theater.longitude,name:theater.name} as coordinateDTO;
            })
            return coordinates;
        }
        return [];
    }

    function genrateEmbeddedVideoURL(trailer:string):string{
        if(!trailer){
            return '';
        }
        let videoId=trailer.split('v=')[1];
        const ampersandPosition=videoId.indexOf('&');
        if(ampersandPosition!==-1){
            videoId=videoId.substring(0,ampersandPosition);
        }
        return `https://www.youtube.com/embed/${videoId}`;   
    }
    return(
        movie?<div dir="rtl">
            <h2>{movie.title} ({movie.releaseDate.getFullYear()})</h2>
            {movie.genres?.map(genre=>
                <Link key={genre.id} 
                      style={{marginRight:'5px'}} 
                      className="btn btn-primary btn-sm rounded-pill" 
                      to={`/movies/filter?genreId=${genre.id}`}>{genre.name}</Link>
                )} |{movie.releaseDate.toLocaleDateString()}

                <div  style={{display:'flex',marginTop:'1rem'}}>
                    <span style={{display:'inline-block',marginRight:'1rem'}}>
                        <img src={movie.poster} style={{width:'225px',height:'315px'}} alt="poster"/>
                    </span>

                    {movie.trailer? <div dir="rtl">
                        <iframe
                            title="טריילר מהיוטיוב"
                            width="560"
                            height="315"
                            src={genrateEmbeddedVideoURL(movie.trailer)}
                            style={{border:'none',marginRight:'1rem'}}
                            allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"
                            allowFullScreen
                        >

                        </iframe>

                    </div>:null}
                </div>
                {movie.summary? <div dir="rtl" style={{marginTop:'1rem'}}>
                    <h3>תקציר</h3>
                    <div>
                        <ReactMarkdown>{movie.summary}</ReactMarkdown>
                    </div>

                </div> :null}

                {movie.actors && movie.actors.length>0?
                    <div dir="rtl" style={{marginTop:'1rem'}}>
                        <h3>שחקנים</h3>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            {movie.actors?.map(actor=>
                                <div key={actor.id} style={{marginBottom:'2px'}}>
                                    <img alt="תמונת שחקן" src={actor.picture} style={{width:'100px',verticalAlign:'middle'}}/>
                                    <span style={{display:'inline-block',width:'200px',marginLeft:'1rem'}}>{actor.name}</span>
                                    <span style={{display:'inline-block',width:'45px'}}>---</span>
                                    <span >{actor.character}</span>

                                </div>
                            )}

                        </div>
                    </div>:null
                }
                {movie.theaters && movie.theaters.length>0?
                    <div dir="rtl" style={{marginTop:'1rem'}}>
                        <h3>מוצג כעת ב</h3>
                        <Map coordinates={transformCoordinates()} readOnly={true}/>
                    </div>:null
                }

        </div>:<Loader/>

    )

}