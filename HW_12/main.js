class TodoList{
    items = [];

    completeAll() {
        this.items.forEach((item) => item.done = true);
    };
    add(params) {
        const newTodoItem = new TodoItem(params);
        
        console.log(newTodoItem);
    };    
};

class TodoItem {
    constructor(params) {
        this.id = params.id;
        this.title = params.title;
        this.description = params.description;
        this.done = params.done;
    }
}

const newList = newList(params);
