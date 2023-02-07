import { Todo } from "../todos/models/todo.model"

const Filters =  {
    All: 'all',
    Completed: 'Completed',
    Pending:'pending'
}

const state = {
    todos: [
        new Todo ('piedra del alma'),
        new Todo ('piedra del infinito'),
        new Todo ('piedra del tiempo'),
    ],
    filter : Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore 🥑');
}


const loadStore = ()=>{
    throw Error ('not implemented');
}

const getTodos = (filter = Filters.All)=>{

    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todos => todos.done);
        case Filters.Pending:
            return state.todos.filter(todos => !todos.done);

        default :
            throw Error (`option ${filter}is not valid.`);

    }
}



/**
 *
 * @param {String} description
 */


const addsTodo = (description)=>{
    throw Error ('not implemented');

}

/**
 *
 * @param {String} todoId
 */
const toggleTodo = (todoId)=>{
    throw Error ('not implemented');

}

const deleteTodo = (todoId)=>{
    throw Error ('not implemented');

}

const deleteCompleted = ()=>{
    throw Error ('not implemented');

}

const setFilter = (newFilter= Filters.All)=>{
    throw Error ('not implemented');

}

const getCurrentFilter = ()=>{
    throw Error ('not implemented');

}








export default {
    initStore,
    loadStore,
    toggleTodo,
    deleteTodo,
    getTodos,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}
