const initialState = {
  count: 0
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      var newState = {...state};
      newState.count++;
      return newState;
    case 'DECREMENT':
      var newState = {...state};    
      newState.count--;
      return newState;
    default:
      return state;
  }
  return state;
}

const store = Redux.createStore(rootReducer);

$(document).ready(() => {
  let currentState = store.getState();
  $('#counter').text(currentState.count);

  $('#increment').on('click', () => {
    store.dispatch({
      type: "INCREMENT"
    });
    let currentState = store.getState();
    $('#counter').text(currentState.count);
  });

  $('#decrement').on('click', () => {
    store.dispatch({
      type: "DECREMENT"
    });
    let currentState = store.getState();
    $('#counter').text(currentState.count);
  });
});