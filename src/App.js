import Nav from './layout/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Raz from './features/Raz'
import Dwa from './features/Dwa'
import Trzy from './features/Trzy'
import './App.css'

function App() {
  return (
    <div>
      <Router >
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Raz />
          </Route>
          <Route path="/raz">
            <Raz />
          </Route>
          <Route path="/dwa">
            <Dwa />
          </Route>
          <Route path="/trzy">
            <Trzy />
          </Route>
        </Switch>
      </Router >
    </div>
  );
}

export default App;