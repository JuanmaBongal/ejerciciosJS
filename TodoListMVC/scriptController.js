/**
 * @class Controller genera el controlador del flujo de datos
 */
 export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Display initial todos
        this.onTodoListChanged(this.model.todos);

        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
        // this.view.bindEditTodo(this.handleEditTodo) - We'll do this one last

        this.model.bindTodoListChanged(this.onTodoListChanged)
    }
    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos)
    }
    handleAddTodo = (todoText) => {
        this.model.addTodo(todoText)
    }
    handleDeleteTodo = (id) => {
        this.model.deleteTodo(id)
    }

    handleToggleTodo = (id) => {
        this.model.toggleTodo(id)
    }


}

