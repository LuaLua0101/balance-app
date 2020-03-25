const initState = [];

export default function headerReducer(state = initState, action) {
  switch (action.type) {
    case 'init_notifies':
      return [...action.header];
    default:
      return state;
  }
}
