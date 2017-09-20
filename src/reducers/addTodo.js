const initState = [{id: 1, todo:"Walk dog", completed:true}, {id:2, todo:"Mow lawn", completed:false}]


const toDoList = (state = initState, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return state;
    case 'ADD_TODO':
      return [...state, {id: state.length + 1, todo: action.todo, completed:false}];
    case 'MARK_AS_COMPLETE':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }
        return Object.assign({},
          todo, {completed: true})
      })
    default:
    return state;

  }
}


export default toDoList
