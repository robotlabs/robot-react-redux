const initialState = {
  state: 'nada'
};
const rnStates = ['logging', 'logged', 'loading', 'in-peace']
export const appStateReducers = (state = initialState, action) => {
  switch(action.type) {
    case 'RANDOM-APP-STATE-ACTION': 
      return {
        state: rnStates[Math.floor(Math.random() * rnStates.length)]
      }
    case 'CUSTOM-APP-STATE-ACTION': 
      return {
        state: action.payload
      }
    default:
      return state;
  }
}