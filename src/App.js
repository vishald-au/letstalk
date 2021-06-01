import Start from './Components/Start'
import Lists from './Components/Lists'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div className='AppArea'>
        
      <Router>
        <Switch>
            
          <Route path="/start">
            <Lists />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        

        </Switch>
      </Router>  

      </div>
    </div>
  );
}

export default App;
