import { Switch, Route, Redirect } from 'react-router';
import { Results } from './Results';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>
      <Route exact path={['/search', '/images', '/news', '/videos']}>
        <Results />
      </Route>
    </Switch>
  );
};
