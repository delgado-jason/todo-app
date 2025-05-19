

export default function ViewController() {

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

    return { showTodo };

}