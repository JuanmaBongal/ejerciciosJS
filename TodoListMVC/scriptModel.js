/**
 * @class Model genera el modelo de acciones
 */
export default class Model {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    }
    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,
        }

        this.todos.push(todo);
        this._commit(this.todos)
    }
    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        let newId = 1;        
        this.todos.forEach((todo) => {todo.id=newId; newId++} ); //restart the id secuence
        this._commit(this.todos);
    }
    toggleTodo(id) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? {
                id: todo.id,
                text: todo.text,
                complete: !todo.complete
            } : todo,
        );
        this._commit(this.todos)
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    _commit(todos) {
        this.onTodoListChanged(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}