import './App.css';
import Homepage from './component/homepage/homepage';
import Login from './component/login/login';
import Registration from './component/registration/registration';
import Problem from './component/pages/problem';
import AddProblem from './component/pages/AddProblem';
import ProblemId from './component/pages/peoblem_Id';
import Navigation from './component/navigation/navigation';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={< Homepage/>}/>
          <Route path='/register' element={< Registration/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/problem' element={<Problem/>}/>
          <Route path='/addproblem' element={<AddProblem/>}/>
          <Route path='/problem/:id' element={<ProblemId/>}/> 
        </Routes>
      </Router>
    </div>
  );
}
export default App;
