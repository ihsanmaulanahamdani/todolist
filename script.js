var todoArray = [];

function newList(txt) {
    // push text to todoArray
    // loop add all elements in todoArray to #todo-list
    var id = todoArray.length + 1

    var objText = {
        'id': id,
        'text': txt,
        'done': false
    }
    todoArray.push(objText);

    document.getElementById('todo').value = '';

    renderList();
}

function renderList() {
    // remove first child of ol
    var myNode = document.getElementById("todo-list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    for (var i = 0; i < todoArray.length; i++) {
        addToList(todoArray[i]);
    }
}

function renderDone() {
    // remove first child of ol
    var myNode = document.getElementById("todo-list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    for (var i = 0; i < todoArray.length; i++) {
        if (todoArray[i].done === true) {
            addToList(todoArray[i]);
        }
    }
}

function renderTodo() {
    // remove first child of ol
    var myNode = document.getElementById("todo-list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    for (var i = 0; i < todoArray.length; i++) {
        if (todoArray[i].done === false) {
            addToList(todoArray[i]);
        }
    }
}

function addToList(todo) {
    // create list
    var li = document.createElement('li');
    li.id = todo.id;
    // create text to do
    var textDiv = document.createElement('div');
    textDiv.className = 'text ' + todo.done;
    textDiv.textContent = todo.text;
    // create button done
    var buttonDone = document.createElement('button');
    buttonDone.className = 'done';
    buttonDone.addEventListener('click', function(e) {
        doneList(todo.id);
    }, true);
    if (todo.done === true) {
        buttonDone.textContent = 'Undone';
    } else {
        buttonDone.textContent = 'Done';
    }
    // create button delete
    var buttonDelete = document.createElement('button');
    buttonDelete.className = 'delete';
    buttonDelete.addEventListener('click', function(e) {
        deleteList(todo.id);
    }, true);
    buttonDelete.textContent = 'Delete';
    // pack it up textDiv, buttonDone and buttonDelete to li
    li.appendChild(textDiv);
    li.appendChild(buttonDone);
    li.appendChild(buttonDelete);
    document.getElementById('todo-list').appendChild(li);
}

function doneList(i) {
    var doneArray = [];
    var counter = 1;
    todoArray.forEach(function(element) {
        if (element.id === i) {
            var objTemp = {};
            objTemp.id = counter;
            objTemp.text = element.text;
            objTemp.done = !element.done;
            doneArray.push(objTemp);
            counter++;
        } else {
            var objTemp = {};
            objTemp.id = counter;
            objTemp.text = element.text;
            objTemp.done = element.done;
            doneArray.push(objTemp);
            counter++;
        }
    });

    todoArray = doneArray;
    renderList();
}

function deleteList(i) {
    var newTodoArray = [];
    var counter = 1;
    todoArray.forEach(function(element) {
        if (element.id !== i) {
            var objTemp = {};
            objTemp.id = counter;
            objTemp.text = element.text;
            objTemp.done = element.done;
            newTodoArray.push(objTemp);
            counter++;
        }
    });

    todoArray = newTodoArray;
    renderList();
}