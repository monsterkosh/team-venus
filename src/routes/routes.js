import { Switch, Route, Redirect } from 'react-router-dom';
import Mercury from '../pages/Mercury/Mercury';
import Venus from '../pages/Venus/Venus';
import Earth from '../pages/Earth/Earth';
import Mars from '../pages/Mars/Mars';
import Jupiter from '../pages/Jupiter/Jupiter';
import Saturn from '../pages/Saturn/Saturn';
import Uranus from '../pages/Uranus/Uranus';
import Neptune from '../pages/Neptune/Neptune';

function Routes() {
  return (
    <Switch>
      <Route exact path='/mercury'>
        <Mercury />
      </Route>
      <Route exact path='/venus'>
        <Venus />
      </Route>
      <Route exact path='/earth'>
        <Earth />
      </Route>
      <Route exact path='/mars'>
        <Mars />
      </Route>
      <Route exact path='/jupiter'>
        <Jupiter />
      </Route>
      <Route exact path='/saturn'>
        <Saturn />
      </Route>
      <Route exact path='/uranus'>
        <Uranus />
      </Route>
      <Route exact path='/neptune'>
        <Neptune />
      </Route>
      <Redirect from='/' to='/mercury' />
    </Switch>
  );
}

export default Routes;
