const initState = [];

export default function configReducer(state = initState, action) {
  switch (action.type) {
    case 'init_configs':
      return {...state, ...action.config};
    default:
      return state;
  }
}
