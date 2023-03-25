import Genres from "./screens/genres/Genres";
import Home from "./screens/home/Home";
import CreateGenre from "./screens/genres/CreateGenre";
import EditGenre from "./screens/genres/EditGenre";
import Actors from "./screens/actors/Actors";
import CreateActor from "./screens/actors/CreateActor";
import EditActor from "./screens/actors/EditActor";
import Theaters from "./screens/theaters/Theaters";
import CreateTheater from "./screens/theaters/CreateTheater";
import EditTheater from "./screens/theaters/EditTheater";
import CreateMovie from "./screens/movies/CreateMovie";
import EditMovie from "./screens/movies/EditMovie";
import FilterMovies from "./screens/movies/FilterMovies";
import RedirectToHome from "./screens/redirect/RedirectToHome";
import MovieDetails from "./screens/movies/MovieDetails";
const routes=[
    {path:'/',element:Home},
    
    {path:'/genres',element:Genres},
    {path:'/genres/create',element:CreateGenre},
    {path:'/genres/edit/:id',element:EditGenre},

    {path:'/actors',element:Actors},
    {path:'/actors/create',element:CreateActor},
    {path:'/actors/edit/:id',element:EditActor},

    {path:'/theaters',element:Theaters},
    {path:'/theaters/create',element:CreateTheater},
    {path:'/theaters/edit/:id',element:EditTheater},

    {path:'/movies/create',element:CreateMovie},
    {path:'/movies/edit/:id',element:EditMovie},
    {path:'/movies/filter',element:FilterMovies},
    {path:'/movies/:id',element:MovieDetails},


    {path:'*',element:RedirectToHome}



]

export default routes;