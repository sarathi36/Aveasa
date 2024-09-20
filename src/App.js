import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Collection from './Collection/collection';
import Coll from './Collection/Maincollection';
import Mainevent from './Event/MainEvent';
import Mainvideo from './video/Mainvideo';
import Signin from './Form/form';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Collections' element={<Collection />} />
        <Route path='/Maincollections' element={<Coll />} />
        <Route path='/Mainevents' element={<Mainevent />} />
        <Route path='/Mainvideo' element={<Mainvideo />} />
        <Route path='/Signin' element={<Signin />} />
       </Routes>
    </div>
  );
}

export default App;
