import { shallowEqual, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  AuthContainer,
  BookingsContainer,
  EventsContainer,
} from "../containers";
import routesConfig from "./config";

const Routes = () => {
  const auth = useSelector((state) => state?.auth, shallowEqual);

  const token = auth?.token;
  return (
    <Switch>
      {token && <Redirect exact path={"/"} to={"/events"} />}
      {token && <Redirect exact path={"/auth"} to={"/events"} />}
      {!token && <Route path={routesConfig.AUTH} component={AuthContainer} />}
      <Route path={routesConfig.EVENTS} component={EventsContainer} />
      {token && (
        <Route path={routesConfig.BOOKINGS} component={BookingsContainer} />
      )}
      {!token && <Redirect exact to={routesConfig.AUTH} />}
    </Switch>
  );
};

export default Routes;
