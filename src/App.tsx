import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import MoviesList from './components/MoviesList/MoviesList';
import { landingPageDTO } from './models/movies.model';
import Genres from './screens/geners/Genres';
import Home from './screens/home/Home';

function App() {

  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        moviesList: [
          {
            id: 1,
            title: "אלכס חולה אהבה",
            poster: "https://pentagon-auctions.com/wp-content/uploads/2021/03/Screenshot_102.png"

          },
          {
            id: 2,
            title: "חגיגה בסנוקר",
            poster: "https://upload.wikimedia.org/wikipedia/he/thumb/b/b3/Snuker_kraza.jpg/250px-Snuker_kraza.jpg"

          },
          {
            id: 3,
            title: "מחילה",
            poster: "https://img.mako.co.il/2019/09/22/dfvwvrr_g.jpg"

          },
          {
            id: 4,
            title: "הלהקה האחרונה בלבנון",
            poster: "https://www.seret.co.il/images/movies/HaLehakaHaAchronaBeLevanon/HaLehakaHaAchronaBeLevanon1.jpg"

          },
          {
            id: 5,
            title: "זרים מושלמים",
            poster: "https://creatixcdn.azureedge.net/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%96%D7%A8%D7%99%D7%9D%20%D7%9E%D7%95%D7%A9%D7%9C%D7%9E%D7%99%D7%9D(1).jpg"

          },
          {
            id: 6,
            title: "מכתוב",
            poster: "https://upload.wikimedia.org/wikipedia/he/9/98/Maktoub1.jpg"

          }
        ],
        inTheaters: [
          {
            id: 7,
            title: "ולנטינוס",
            poster: "https://www.seret.co.il/images/movies/Valentinos/Valentinos1.jpg"

          },
          {
            id: 8,
            title: "בתולים",
            poster: "https://upload.wikimedia.org/wikipedia/he/8/89/Betulim.jpg"

          },

        ]
      })

    }, 1000)
    return () => clearTimeout(timerId)
  })

  return (

    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home moviesList={movies.moviesList} inTheaters={movies.inTheaters} />} />

          <Route path='/genres' element={<Genres />} />




        </Routes>


      </div>
    </BrowserRouter>



  );
}

export default App;
