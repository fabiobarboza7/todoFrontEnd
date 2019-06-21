// code from my codePen > https://codepen.io/fabiobarboza7/pen/agpPGW?editors=1010

const app = $("#app");
const appDone = $("#done");
const newTodo = $("#new-todo");
const btnAddTodo = $("#add-todo");

const todos = [];

const cleanScreen = () => {
  app.html('');
  appDone.html('');
}

const renderTodos = () => {
  cleanScreen();
  for(todo of todos){
    let todoIndex = todos.indexOf(todo);
    if(todo.done){
      appDone.append(`<li>
                  ${todo.title}
                  <input type='checkbox' onchange='markAdd(${todoIndex})' checked> marcar como feito
                  <a href="#" onclick='deleteTodos(${todoIndex})'>deletar</a>
                </li>`);
    } else {
      app.append(`<li>
                  ${todo.title}
                  <input type='checkbox' onchange='markAdd(${todoIndex})'> marcar como feito
                  <a href="#" onclick="deleteTodos(${todoIndex})">deletar</a>
                </li>`);
    }   
    
  }
  console.log(todos.length);
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

