import Start from './Components/Start'
import Lists from './Components/Lists'
import Form from './Components/Form'
import Chat from './Components/Chat'
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

      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>


      <div className='AppArea'>



        <Router>
          <Switch>

            <Route path="/chat">
              <Chat Link={Link} />
            </Route>
            <Route path="/start">
              <Lists Link={Link} />
            </Route>
            <Route path="/form">
              <Form Link={Link} />
            </Route>
            <Route path="/">
              <Start Link={Link} />
            </Route>


          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
