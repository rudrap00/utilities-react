const data = [
  { title: "First", id: 0, checked: false },
  { title: "Second", id: 1, checked: false },
  { title: "Third", id: 2, checked: false },
  { title: "Fourth", id: 3, checked: false },
  { title: "Fifth", id: 4, checked: false },
];

export const initalState = {
  leftList: data,
  rightList: [],
};

export const reducer = (state, action) => {
  if (action.type === "select") {
    const { from, elementId } = action;

    if (from === "left") {
      let filterdList = state.leftList.map((item) => {
        if (item.id === elementId) {
          item.checked = !item.checked;
          return item;
        } else {
          return item;
        }
      });

      return { leftList: filterdList, rightList: state.rightList };
    } else {
      let filteredList = state.rightList.map((item) => {
        if (item.id === elementId) {
          item.checked = !item.checked;
          return item;
        } else {
          return item;
        }
      });

      return { leftList: state.leftList, rightList: filteredList };
    }
  } else if (action.type === "switch") {
    const { task } = action;

    if (task === "shiftRight") {
      let transferList = state.leftList.filter((item) => item.checked);

      if (transferList.length === 0) {
        return { leftList: state.leftList, rightList: state.rightList };
      }
      let newLeftList = state.leftList.filter((item) => !item.checked);

      transferList = transferList.map((item) => {
        item.checked = !item.checked;

        return item;
      });

      let newRightList = [...state.rightList, ...transferList];

      return { leftList: newLeftList, rightList: newRightList };
    } else {
      let transferList = state.rightList.filter((item) => item.checked);

      if (transferList.length === 0) {
        return { leftList: state.leftList, rightList: state.rightList };
      }

      let newRightList = state.rightList.filter((item) => !item.checked);
      transferList = transferList.map((item) => {
        item.checked = !item.checked;

        return item;
      });
      let newLeftList = [...state.leftList, ...transferList];

      return { leftList: newLeftList, rightList: newRightList };
    }
  } else {
    return action.payload;
  }
};
