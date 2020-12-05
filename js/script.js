let createTodo = function(todo)  {
    let li = document.createElement('li');
  
    let label = document.createElement('label');
    label.innerHTML = todo;
    
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        this.parentNode.classList.toggle('checked');
    }
  
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        this.parentNode.remove();
    }
  
    li.appendChild(checkbox); 
    li.appendChild(label);
    li.appendChild(deleteButton);
    document.querySelector('#todoList').appendChild(li);
}
  
let addButton = document.getElementById('add');
  
addButton.onclick = function() {
    let parentX = this.parentNode;
    let inputText = parentX.children[0];
    if(inputText.value === '')
    {
        return;
    }
    else{
        createTodo(inputText.value);
        inputText.value = '';
    }
}