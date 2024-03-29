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
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import Users from "./screens/auth/Users";
const routes=[
    {path:'/',element:Home},
    
    {path:'/genres',element:Genres,isAdmin:true},
    {path:'/genres/create',element:CreateGenre,isAdmin:true},
    {path:'/genres/edit/:id',element:EditGenre,isAdmin:true},

    {path:'/actors',element:Actors,isAdmin:true},
    {path:'/actors/create',element:CreateActor,isAdmin:true},
    {path:'/actors/edit/:id',element:EditActor,isAdmin:true},

    {path:'/theaters',element:Theaters,isAdmin:true},
    {path:'/theaters/create',element:CreateTheater,isAdmin:true},
    {path:'/theaters/edit/:id',element:EditTheater,isAdmin:true},

    {path:'/movies/create',element:CreateMovie,isAdmin:true},
    {path:'/movies/edit/:id',element:EditMovie,isAdmin:true},
    {path:'/movies/filter',element:FilterMovies},
    {path:'/movies/:id',element:MovieDetails},

    {path:'/register',element:Register},
    {path:'/login',element:Login},
    {path:'/users',element:Users,isAdmin:true},



    {path:'*',element:RedirectToHome}



]

export default routes;