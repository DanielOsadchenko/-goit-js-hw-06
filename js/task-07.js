const inputRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputRef.addEventListener('input', OnTextChangingFontSize);
text.style.fontSize = '56px';
function OnTextChangingFontSize(event) {
  const inputValue = event.currentTarget.value;
  const changedTextFontSize = `${inputValue}px`;
  text.style.fontSize = changedTextFontSize;
}