import React, { useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import qs from "query-string";
import { createUser, login } from "../../services";
import { loginAction } from "../../store/actions";
import style from "./index.module.scss";
import routesConfig from "../../routes/config";

function Auth() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const emailEl = useRef();
  const passwordEl = useRef();

  const redirectUrl = qs.parse(location?.search)?.redirectUrl;
  const [isLogin, setIsLogin] = useState(true);

  const switchMode = () => {
    setIsLogin((prev) => !prev);
  };

  const submit = async (event) => {
    event.preventDefault();

    const email = emailEl.current.value;
    const password = passwordEl.current.value;

    let response;
    if (isLogin) {
      response = await login({ email, password });
    } else {
      response = await createUser({ email, password });
    }

    if (response.token) {
      dispatch(loginAction(response));
      if (redirectUrl) history.replace(redirectUrl);
      else history.replace(routesConfig.EVENTS);
    }
  };

  return (
    <form className={style.container} onSubmit={submit}>
      <div className={style.formControl}>
        <label htmlFor={"__auth_email__"}>Email</label>
        <input id={"__auth_email__"} type="email" ref={emailEl} />
      </div>
      <div className={style.formControl}>
        <label htmlFor={"__auth_password__"}>Password</label>
        <input id={"__auth_password__"} type="password" ref={passwordEl} />
      </div>
      <div className={style.formActions}>
        <button type="submit">Submit</button>
        <button type="button" onClick={switchMode}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>
    </form>
  );
}

export default Auth;
