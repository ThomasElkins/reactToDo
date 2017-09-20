const initState = [{todo:"Walk dog"}, {todo:"Mow lawn"}]


const toDoList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return state;
    default:
    return state;

  }
}


export default toDoList
