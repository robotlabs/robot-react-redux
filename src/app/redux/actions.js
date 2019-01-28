export const incrementAction = (value) => ({
  type: 'INCREMENT-ACTION',
  valueIncrement: value
});
export const decrementAction = (value) => ({
  type: 'DECREMENT-ACTION',
  valueDecrement: value
});
export const messageAction = (message) => ({
  type: 'CUSTOM-APP-STATE-ACTION',
  payload: message
});
export const randomAppState = () => ({
  type: 'RANDOM-APP-STATE-ACTION'
});