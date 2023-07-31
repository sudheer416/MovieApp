import logo from './logo.svg';
import './App.css';
import {Link,Route,BrowserRouter,Router,Switch, Routes} from 'react-router-dom'
import LoginFrom from './components/login';
//import {Switch} from "react-router"


function App() {
  return (
   
      <div className='body'>
    
          <BrowserRouter>
            <Routes>
              <Route exact path="/login" Component={LoginFrom}/>
            </Routes>
          </BrowserRouter>
        
          </div>
   
    
   
  )
}
  

export default App
