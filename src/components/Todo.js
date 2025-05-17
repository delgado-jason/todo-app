

export default class Todo {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = new Date(dueDate);
        this.dateCreated = new Date();
        this.priority = priority;
    }
    
    // Return the date the todo was created
    getDateCreated() {
        return this.dateCreated;
    }

    // Return the string of the object
    toString() {
        return `
            Title: ${this.title}
            Description: ${this.desc}
            Due Date: ${this.dueDate}
            Date Created: ${this.dateCreated}
            Priority: ${this.priority}
        `;
    }
    
}