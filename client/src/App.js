import './App.css';
import Homepage from './component/homepage/homepage';
import Login from './component/login/login';
import Registration from './component/registration/registration';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={< Homepage/>}/>
          <Route path='/register' element={< Registration/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
