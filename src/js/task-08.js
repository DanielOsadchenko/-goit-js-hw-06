const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', OnSubmit);

function OnSubmit(event) {
  event.preventDefault();
  if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") {
    alert('Я, звичайно, дуже вибачаюся, але всі поля мають бути заповнені');
  } 
  else {
    
    console.log({ email: event.currentTarget.email.value, password: event.currentTarget.password.value, });
    event.target.reset();
  }
  
}
