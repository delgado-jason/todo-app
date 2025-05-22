


export default function EventController() {

    // Add todos
    const addTodo = (task, arr) => {
        arr.push(task);
    }

    const addProject = (proj, arr) => {
        arr.push(proj);
    }

    return { addTodo, addProject }

}