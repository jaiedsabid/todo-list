let createTodo = function(todo) {
    let li = document.createElement('li');
  
    let chk = document.createElement('input');
    chk.setAttribute('type', 'checkbox');
  
    let label = document.createElement('label');
    label.innerHTML = todo;
  
    let btn = document.createElement('button');
    btn.innerHTML = 'Delete';
    btn.classList.add('delete');
    
    li.appendChild(chk);
    li.appendChild(label);
    li.appendChild(btn);
  
    return li;
  }