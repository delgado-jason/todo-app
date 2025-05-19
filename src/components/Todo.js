

export default class Todo {
    constructor(title) {
        this.title = title;
        this.dateCreated = new Date();
    }
    
    // Return the date the todo was created
    getDateCreated() {
        return this.dateCreated;
    }

    // Return title
    getTitle() {
        return this.title;
    }

    // Return the string of the object
    toString() {
        return `
            Title: ${this.title}
            Date Created: ${this.dateCreated}
        `;
    }
    
}