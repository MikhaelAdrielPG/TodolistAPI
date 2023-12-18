export  class TodolistService {
    todolist = ["Test1", "Test2", "Test3"];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        });
    }

    getTodoList(request, response) {
        response.write(this.getJsonTodoList());
        response.end();
    }
}