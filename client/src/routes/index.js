// import { shallowEqual, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  AuthContainer,
  BookingsContainer,
  EventsContainer,
} from "../containers";
import routesConfig from "./config";

const Routes = () => {
  // const auth = useSelector((state) => state?.auth, shallowEqual);

  // const token = auth?.token;
  return (
    <Switch>
      <Redirect exact path={routesConfig.BASE} to={routesConfig.AUTH} />
      <Route path={routesConfig.AUTH} component={AuthContainer} />
      <Route path={routesConfig.EVENTS} component={EventsContainer} />
      <Route path={routesConfig.BOOKINGS} component={BookingsContainer} />
    </Switch>
  );
};

export default Routes;
