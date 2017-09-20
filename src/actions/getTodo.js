export default getTodos = (todo) => {
  return {
    type: "GET_TODOS",
    todo
  }
}
