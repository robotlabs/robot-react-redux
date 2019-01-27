const initialState = {
  count: 13
};
export const math = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT-ACTION': 
      return {
        count: state.count + action.valueIncrement
      }
    case 'DECREMENT-ACTION': 
      return {
        count: state.count - action.valueDecrement
      }
    default:
      return state;
  }
}