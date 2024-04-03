import { useEffect, useReducer } from "react";
import styles from "./ListTasks.module.scss";
import TransferList from "./components/TransferList/TransferList";
import { initalState, reducer } from "./components/constants";

function ListTasks() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    if (localStorage.getItem("state")) {
      dispatch({
        type: "set",
        payload: JSON.parse(localStorage.getItem("state")),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div className={styles.App}>
      <h1>Transfer List</h1>
      <TransferList state={state} dispatch={dispatch} />
    </div>
  );
}

export default ListTasks;
