const counter = (state = [{value:"premier", key:counter.length}], action) => {
    switch (action.type) {
    case 'ADD': return state.concat({value:"à faire", key:state.length});
    case 'REMOVE': return state.slice(1, state.length);
    default: return state;
    }
  }
  export default counter;