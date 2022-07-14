import './App.css';
import {Allroutes} from './components/AllRoutes/Allroutes';
import {Navbar} from './components/HomeScreen/Navbar';
function App() {
  return (
    <div className="App">
       <Navbar/>
     <Allroutes/>
    </div>
  );
}

export default App;
