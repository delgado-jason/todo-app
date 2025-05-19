


export default function EventController() {

    // Add todos
    const addTodo = (task, arr) => {
        arr.push(task);
    }

    return { addTodo }

}