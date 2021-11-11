window.addEventListener('load', start);

var globalNames = ['Mateus', 'Filipe']
var inputName = null;

function start() {
  preventFormSubmit();

  inputName = document.querySelector('#inputName');
  activateInput();
  render();
}

function preventFormSubmit() {
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  
  function handleFormSubmit(event) {
    event.preventDefault();
  }
}

function activateInput() {
  inputName.addEventListener('keyup', handleTyping);

  function handleTyping(event) {
    if(event.key === 'Enter') {
      insertName(event.target.value)
    }
  }

  function insertName(newName) {
    globalNames.push(newName);
    render();
  }
  inputName.focus();
};

function render(){
  function createDeleteButton(index) {
    var button = document.createElement('button');
    button.classList.add('deleteButton')
    button.textContent = 'X';

    button.addEventListener('click', deleteName);
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }

    return button;
  }

  var divNames = document.querySelector('#names');
  var ul = document.createElement('ul');

  for(var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    divNames.innerHTML = '';

    var li = document.createElement('li');
    
    var button = createDeleteButton(i);

    var span = document.createElement('span');
    span.textContent = currentName;

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  inputName.value = '';
  inputName.focus();
}