import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'
import { ROUTES } from './constants';
import Home from './Routes/Home';
import './index.scss'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={ROUTES.BASE_URL}>
            {window.location.pathname === ROUTES.BASE_URL && <Redirect to={ROUTES.HOME} />}
          </Route>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
