import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import routes from './route-config';
import './App.css';

function App() {


  return (

    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Routes>
          {routes.map(route=>
                      <Route key={route.path} path={route.path} element={<route.element />}/>
                     )
          }
         




        </Routes>


      </div>
    </BrowserRouter>



  );
}

export default App;
