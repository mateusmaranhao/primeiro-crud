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

    console.log(globalNames)
  }

  inputName.focus();
};