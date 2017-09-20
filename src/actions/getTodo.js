export default getTodos = () => {
  return {
    type: "GET_TODOS"
  }
}

export default addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo
  }
}
