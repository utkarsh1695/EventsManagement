import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, login } from "../../services";
import { authAction } from "../../store/actions";
import style from "./index.module.scss";

function Auth() {
  const dispatch = useDispatch();
  const emailEl = useRef();
  const passwordEl = useRef();

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

    console.log({ response });
    dispatch(authAction(response));
  };

  return (
    <form className={style.container} onSubmit={submit}>
      <div className={"formControl"}>
        <label htmlFor={"__auth_email__"}>Email</label>
        <input id={"__auth_email__"} type="email" ref={emailEl} />
      </div>
      <div className={"formControl"}>
        <label htmlFor={"__auth_password__"}>Password</label>
        <input id={"__auth_password__"} type="password" ref={passwordEl} />
      </div>
      <div className={"formActions"}>
        <button className="btn__primary" type="submit">
          Submit
        </button>
        <button className="btn__secondary" type="button" onClick={switchMode}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>
    </form>
  );
}

export default Auth;
