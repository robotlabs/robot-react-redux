const initialState = {
  count: 13
};
export const xxx = (state = initialState, action) => {
  switch(action.type) {
    case 'XXX1-ACTION': 
      return {
        countxxx: Math.random() * 10
      }
    case 'XXX2-ACTION': 
      return {
        countxxx: Math.random() * 100
      }
    default:
      return state;
  }
}