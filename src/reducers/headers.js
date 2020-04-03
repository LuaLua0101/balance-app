const initState = [];

export default function headerReducer(state = initState, action) {
  switch (action.type) {
    case 'init_headers':
      return [...action.header];
    default:
      return state;
  }
}
