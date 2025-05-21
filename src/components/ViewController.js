

export default function ViewController() {
    
    const mainContentDiv = document.getElementById('mainContent');

    const fieldset = document.getElementById('todosFieldset');

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

    return { showTodo, newProjectPage };

}