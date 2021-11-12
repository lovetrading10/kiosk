const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.includes(action.item.name)) {
        return state;
      }

      return [...state, action.item.name];

    case "REMOVE_ITEM":
      if (state.includes)
        return state.filter((food) => food.name != action.item.name);

    case "CLEAR_ITEMS":
      return [];

    default:
      return state;
  }
};

export { cartReducer };
