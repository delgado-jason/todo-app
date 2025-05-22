import './assets/styles.css';
import Todo from "./components/Todo";
import Project from "./components/Project";
import EventController from './components/EventController';
import ViewController from './components/ViewController';

const app = (function() {

    // Store the projects
    let projects = []
    
    // Store the todos
    let todos = [];

    const display = ViewController();
    const controller = EventController();
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInputField');
    const projectBtn = document.getElementById('newProjectButton');
    


    // Create default project
    const defaultProject = new Project();
    
    // Populate the projects array with default project
    projects.push(defaultProject);

    // Add event listener for todo form
    todoForm.addEventListener('submit', (e) => {
        
            e.preventDefault();
            console.log(e.target);

            // Create a new Todo
            const newTask = new Todo(todoInput.value);


            // Add the new task to the list of todos
            controller.addTodo(newTask, todos);

            // Call the ViewController method
            display.showTodo(newTask.getTitle());

            // Clear value from input field
            // todoInput.value = '';
        

    })

    // Add event listener for new project button
    projectBtn.addEventListener('click', e => {
        e.preventDefault();
        display.newProjectPage();

        const projectSubBtn = document.getElementById('projectSubBtn');

        // Event listener for project submission button
        projectSubBtn.addEventListener('click', e => {
            e.preventDefault();

            const projectName = document.getElementById('projectInput').value;

            const newProject = new Project(projectName);

            controller.addProject(newProject, projects);
        });
    });

    


})();

