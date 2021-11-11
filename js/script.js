window.addEventListener('load', start);

var globalNames = []
var inputName = null;

function start() {
  preventFormSubmit();

  inputName = document.querySelector('#inputName');
  activateInput();
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
  var divNames = document.querySelector('#names');
  var ul = document.createElement('ul');

  for(var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    divNames.innerHTML = '';

    var li = document.createElement('li');
    li.textContent = currentName;
     
    ul.appendChild(li);
  }

  divNames.appendChild(ul);
}