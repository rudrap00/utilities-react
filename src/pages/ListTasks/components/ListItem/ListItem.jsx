import styles from "./ListItem.module.scss";

const ListItem = ({ data, onSelect }) => {
  const { id, title: name, checked } = data;

  const clickHandler = (e) => {
    onSelect(e);
  };

  return (
    <div
      id={id}
      className={
        checked ? styles.active + " " + styles.listItem : styles.listItem
      }
      onClick={clickHandler}
    >
      {name}
    </div>
  );
};

export default ListItem;
