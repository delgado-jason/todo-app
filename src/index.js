import './assets/styles.css';
import Todo from "./components/Todo";
import Project from "./components/Project";
import EventController from './components/EventController';
import ViewController from './components/ViewController';

const app = (function() {
    
    // Store the todos
    let todos = [];

    const display = ViewController();
    const controller = EventController();
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInputField');


    // Create default project
    const defaultProject = new Project();

    // Add event listener for todo form
    todoForm.addEventListener('submit', (e) => {
        
            e.preventDefault();

            // Create a new Todo
            const newTask = new Todo(todoInput.value);


            // Add the new task to the list of todos
            controller.addTodo(newTask, todos);

            // Call the ViewController method
            display.showTodo(newTask.getTitle());

            // Clear value from input field
            // todoInput.value = '';
        

    })

})();

