let nextTodoId = 0
//to add an item to the todo list
export const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
})
//to change the visibke actions
export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})
//to switch between 'active' and 'completed' on an action
export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})
//constants
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}