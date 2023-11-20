class TodoService {
    async getTodos() {
      const get_response = await fetch("/showtask", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return get_response.json();
    }
  
    async addTodo(content) {
      const post_response = await fetch("/createtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      return post_response.json();
    }

  async deleteTodo(taskId) {
    const delete_response = await fetch("/deletetask", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: taskId}),
    });
    return delete_response.json();
  }
}
export default TodoService; 