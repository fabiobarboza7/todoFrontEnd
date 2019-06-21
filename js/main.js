// code from my codePen > https://codepen.io/fabiobarboza7/pen/agpPGW?editors=1010

const app = $("#app");
const appDone = $("#done");
const newTodo = $("#new-todo");
const btnAddTodo = $("#add-todo");

newTodo.focus();
const todos = [];

const cleanScreen = () => {
  app.html('');
  appDone.html('');
}

const renderTodos = () => {
  cleanScreen();
  for(todo of todos){
    let todoIndex = todos.indexOf(todo);
    let counter = todoIndex + 1;
    if(todo.done){
      appDone.append(`
                      <tr><th>${counter}</th>
                      <td>
                      <strike class='text-success'>${todo.title}</strike>
                      </td>
                      <td>
                      <input type='checkbox' onchange='markAdd(${todoIndex})' checked>
                      </td>
                      <td>
                      <a href="#" onclick='deleteTodos(${todoIndex})'>deletar</a>
                      </td></tr>
                    `);
    } else {
          app.append(`
                      <tr><th>${counter}</th>
                      <td><span class='text-info'>${todo.title}</span></td>
                      <td>
                      <input type='checkbox' onchange='markAdd(${todoIndex})'>
                      </td>
                      <td>
                      <a href="#" onclick="deleteTodos(${todoIndex})">deletar</a>
                      </td></tr>`
                    );
    }   
  }
}

const addTodo = (text) => {
  todos.push({
    done: false, 
    title: text
  });
  renderTodos();
}

const markAdd = (todo) => {
  obj = todos[todo];
  obj.done = !obj.done;
  obj.title = obj.title;
  renderTodos();
}

const deleteTodos = (remove) => {
  todos.splice(remove, 1);
  renderTodos();
}

btnAddTodo.click(() => {
  addTodo(newTodo.val());
  renderTodos();
  newTodo.val('');
});

newTodo.on('keypress',function(e) {
    if(e.which == 13) {
        btnAddTodo.click();
    }
});
