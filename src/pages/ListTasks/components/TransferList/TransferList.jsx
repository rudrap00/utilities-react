import ListItem from "../ListItem/ListItem";
import styles from "./TransferList.module.scss";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const TransferList = ({ state, dispatch }) => {
  const { leftList, rightList } = state;

  const transferHandler = (e) => {
    const task = e.currentTarget.name;
    dispatch({ type: "switch", task });
  };

  const selectHandler = (e) => {
    const from = e.target.parentElement.id;
    const elementId = Number(e.target.id);
    dispatch({ type: "select", from, elementId });
  };

  return (
    <>
      <div className={styles.transferList}>
        <div id="left" className={styles.listContainer}>
          {leftList &&
            leftList.map((item) => (
              <ListItem key={item.id} data={item} onSelect={selectHandler} />
            ))}
        </div>
        <div className={styles.btnContainer}>
          <button name="shiftRight" onClick={transferHandler}>
            <GoArrowRight />
          </button>
          <button name="shiftLeft" onClick={transferHandler}>
            <GoArrowLeft />
          </button>
        </div>
        <div id="right" className={styles.listContainer}>
          {rightList &&
            rightList.map((item) => (
              <ListItem key={item.id} data={item} onSelect={selectHandler} />
            ))}
        </div>
      </div>
    </>
  );
};

export default TransferList;
