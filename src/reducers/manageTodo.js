export default function manageTodo(state = {todos: []}, action) {
  switch(action.type){
    case 'ADD_TODO':
      console.log({todos: state.todos.concat(action.data)})
      return {...state,todos:state.todos.concat(action.data)}
  }
  return state;
}
