import './App.css';
import IndividualMovie from './components/IndividualMovie/IndividualMovie';
import { movieDTO } from './models/movies.model';

function App() {
  const movie:movieDTO={
    id:1,
    title:"אלכס חולה אהבה",
    poster:"https://pentagon-auctions.com/wp-content/uploads/2021/03/Screenshot_102.png"

  }
  return (
    <>
    <IndividualMovie {...movie}/>
     
    </>
  );
}

export default App;
