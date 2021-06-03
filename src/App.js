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
              <Chat />
            </Route>
            <Route path="/start">
              <Lists />
            </Route>
            <Route path="/form">
              <Form />
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
