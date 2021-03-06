/**
 * @class Model genera el modelo de acciones
 */
class Model {
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


/**
 * @class View muestra la vista por pantalla del model
 */
class View {
    constructor() {
        // The root element
        this.app = this.getElement('#root');

        // The title of the app
        this.title = this.createElement('h1');
        this.title.textContent = 'Todos';
        this.title.id = 'Titulo';

        // The form, with a [type="text"] input, and a submit button
        this.form = this.createElement('form');

        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Add todo';
        this.input.name = 'todo';

        this.submitButton = this.createElement('button');
        this.submitButton.textContent = 'Submit';

        // The visual representation of the todo list
        this.todoList = this.createElement('ul', 'todo-list');

        // Append the input and submit button to the form
        this.form.append(this.input, this.submitButton);

        // Append the title, form, and todo list to the app
        this.app.append(this.title, this.form, this.todoList);
        
    }
    // Create an element with an optional CSS class
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) {
            element.classList.add(className);
        };

        return element;
    }

    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector);

        return element
    }
    get _todoText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = '';
    }

    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }

        // Show default message
        if (todos.length === 0) {
            const p = this.createElement('p')
            p.textContent = 'Nothing to do! Add a task?'
            this.todoList.append(p)
        } else {
            // Create todo item nodes for each todo in state
            todos.forEach(todo => {
                const li = this.createElement('li');
                li.id = todo.id;

                // Each todo item will have a checkbox you can toggle
                const checkbox = this.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;

                //Span for Task text nodes
                const span = this.createElement('span');

                // If the todo is complete, it will have a strikethrough
                if (todo.complete) {
                    const strike = this.createElement('s');
                    strike.textContent = todo.text;
                    span.append(strike);
                } else {
                    // Otherwise just display the text
                    span.textContent = todo.text;
                }

                // The todos will also have a delete button
                const deleteButton = this.createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                li.append(checkbox, span, deleteButton);

                // Append nodes to the todo list
                this.todoList.append(li);
            })
        }
    }

    bindAddTodo(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault()

            if (this._todoText) {
                handler(this._todoText)
                this._resetInput()
            }
        })
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id)

                handler(id)
            }
        })
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id)

                handler(id)
            }
        })
    }

}


/**
 * @class Controller genera el controlador del flujo de datos
 */
class Controller {
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

/**
 * @app crea el controlador con los datos recibidos del
 * de la creacion de la vista y del modelo
 */
const app = new Controller(new Model(), new View());