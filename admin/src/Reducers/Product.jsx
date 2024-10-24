const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value,
      };
    case "SET_SUBCATEGORY":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "SET_PRODUCT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "SET_FILE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "GET_ALL_PRODUCTS":
      console.log(action.payload)
      return {
        ...state,
        allProduct: action.payload.products,
      };
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
