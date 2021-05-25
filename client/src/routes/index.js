import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage, BookingsPage, EventsPage } from "../pages";

const Routes = () => (
  <Switch>
    <Redirect exact path="/" to="/auth" />
    <Route path="/auth" component={AuthPage} />
    <Route path="/events" component={EventsPage} />
    <Route path="/bookings" component={BookingsPage} />
  </Switch>
);

export default Routes;
