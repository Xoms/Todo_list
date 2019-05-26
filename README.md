# Todo_list
React-Redux Todo list

Presentational Components
- TodoList is a list showing visible todos.
  - todos: Array is an array of todo items with { id, text, completed } shape.
  - onTodoClick(id: number) is a callback to invoke when a todo is clicked.
- Todo is a single todo item.
  - text: string is the text to show.
  - completed: boolean is whether the todo should appear crossed out.
  - onClick() is a callback to invoke when the todo is clicked.
- Link is a link with a callback.
  - onClick() is a callback to invoke when the link is clicked.
- Footer is where user changes currently visible todos.
- App is the root component that renders everything else.

Container Components
 - VisibleTodoList filters the todos according to the current visibility filter and renders a TodoList.
 - FilterLink gets the current visibility filter and renders a Link.
   - filter: string of 'SHOW_ALL' || 'SHOW_COMPLETED' || 'SHOW_ACTIVE'.
 - AddTodo is an input field with an “Add” button

