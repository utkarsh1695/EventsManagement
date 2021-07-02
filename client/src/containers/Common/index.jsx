import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SnackBar from "../../components/SnackBar";
import { SNACKBAR_TIMEOUT } from "../../constants";
import { hideSnackBarAction } from "../../store/commonActions";

function Common() {
  const dispatch = useDispatch();
  const { snackBar } = useSelector((state) => state?.common, shallowEqual);

  useEffect(() => {
    if (snackBar?.show) {
      setTimeout(() => {
        dispatch(hideSnackBarAction());
      }, SNACKBAR_TIMEOUT);
    }
  }, [snackBar?.show]);

  return <div>{snackBar?.show && <SnackBar text={snackBar?.text} />}</div>;
}

export default Common;
