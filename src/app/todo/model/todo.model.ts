export class Todo {

    id: number;
    task: string;
    completed: boolean;

    constructor(description: string) {
        this.id = Math.random();
        this.task = description.charAt(0).toUpperCase() + description.slice(1);
        this.completed = false;
    }
}

