const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onValidationInput);

function onValidationInput(event) {
  const input = event.currentTarget;
  const inputLength = Number(input.dataset.length);

  if (input.value.length === inputLength) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
  
  else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }

}


