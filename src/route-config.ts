import Genres from "./screens/geners/Genres";
import Home from "./screens/home/Home";
import CreateGenre from "./screens/geners/CreateGenre";
import EditGenre from "./screens/geners/EditGenre";
import Actors from "./screens/actors/Actors";
import CreateActor from "./screens/actors/CreateActor";
import EditActor from "./screens/actors/EditActor";
const routes=[
    {path:'/',element:Home},
    {path:'/genres',element:Genres},
    {path:'/genres/create',element:CreateGenre},
    {path:'/genres/edit',element:EditGenre},
    {path:'/actors',element:Actors},
    {path:'/actors/create',element:CreateActor},
    {path:'/actors/edit',element:EditActor},


]

export default routes;