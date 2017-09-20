const initState = [{todo:"Walk dog"}, {todo:"Mow lawn"}]


const toDoList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return state;
    case 'ADD_TODO':
      return [...state, {todo: action.todo}]
    default:
    return state;

  }
}


export default toDoList
