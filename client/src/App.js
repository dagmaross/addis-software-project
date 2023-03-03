import Navbar from "./Components/navbar";

import Home from "./home";
import{Routes,Route}from'react-router-dom';
import Totalsong from "./Components/totalsong";
import Artist from "./Components/Artist";
import Album from "./Components/Album";
import Genre from "./Components/genre";
import Lists from "./Components/lists";
import Edit from "./Components/editpage";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/totalsong' element={<Totalsong/>}>
        </Route>
        <Route path='/artist' element={<Artist/>}>
        </Route>
        <Route path='/album' element={<Album/>}>
        </Route>
        <Route path='/genre' element={<Genre/>}>
        </Route>
        <Route path='/lists' element={<Lists/>}>
        </Route>
        <Route path='/edit/:id' element={<Edit/>}>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

