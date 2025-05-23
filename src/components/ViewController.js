

export default function ViewController() {
    
    const mainContentDiv = document.getElementById('mainContent');

    const fieldset = document.getElementById('todosFieldset');

    // Displays index.html
    const showIndexPage = () => {
        
        mainContentDiv.innerHTML = `
            <p id="message">Enter a task for the current project or click the green button to start a new project</p>
        
            <div class="projectContainer" id="projectContainer">
                <form action="" id="todoForm">
            
                    <h4 id="projectName">Everyday</h4>
            
                    <!-- Field to enter new todo -->
                    <input type="text" id="todoInputField">
            
                    <!-- Where all the tasks are displayed -->
                    <fieldset id="todosFieldset">
                        <label for="task1">
                            <input type="checkbox" id="cb1" name="cb1" value="complete">
                            <span></span>
                            Clean house
                        </label><br>
            
                        <label for="task2">
                            <input type="checkbox" id="cb2" name="cb2" value="complete">
                            <span></span>
                            Take out the trash
                        </label><br>
            
                        <label for="task3">
                            <input type="checkbox" id="cb3" name="cb3" value="complete" checked>
                            <span></span>
                            Clean Garage
                        </label><br>
            
                        <label for="task4">
                            <input type="checkbox" id="cb4" name="cb4" value="complete" checked>
                            <span></span>
                            Walk the dog
                        </label><br>
                    </fieldset>
            
                </form> <!-- end of todo form -->
            </div>
            <button id="newProjectButton">+</button>
        `;

    }

    const showTodo = (task) => {
        const todoInput = document.getElementById('todoInputField');
        
        // Create new label element
        const label = document.createElement('label');

        label.setAttribute('for', 'index5');

        label.innerHTML = `
            <input type="checkbox" id="cb5" name="cb5" value="complete">
            <span></span>
            ${task}
        `;

        // Append the label element to fieldset
        fieldset.appendChild(label);
        
    }

    const newProjectPage = () => {

        mainContentDiv.innerHTML = `
            <form id="projectForm">
                <h1 class="form-h1">
                    Project Name
                </h1>
                <input type="text" id="projectInput" class="project-input" autofocus />
                <button id="projectSubBtn" class="project-sub-btn">SUBMIT</button>
            </form>
        `;

    }

    const showProjects = (name, formNum) => {

        const projectContainer = document.getElementById('projectContainer');

        projectContainer.classList.add('projectContainer');

        const todoForm = document.createElement('form');
        todoForm.setAttribute('id', `todoForm${formNum}`);

        todoForm.classList.add('todo-form');

        todoForm.innerHTML = `
                <h4 id="projectName">${name}</h4>
                <input type="text" id="todoInputField">
            `;

        projectContainer.appendChild(todoForm);
    }

    return { 
        showTodo, 
        newProjectPage, 
        showIndexPage, 
        showProjects
    };

}