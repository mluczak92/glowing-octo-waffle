import Nav from './layout/Nav'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Raz from './features/Raz'
import Dwa from './features/Dwa'
import Trzy from './features/Trzy'
import './App.css'
import NotFound from './layout/NotFound'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/raz" />
        </Route>
        <Route path="/raz" exact>
          <Raz />
        </Route>
        <Route path="/dwa" exact>
          <Dwa />
        </Route>
        <Route path="/trzy" exact>
          <Trzy />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router >
  );
}

export default App;