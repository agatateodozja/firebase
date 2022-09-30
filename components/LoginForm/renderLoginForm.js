
import { auth } from "../../firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"
import renderHomePage from "../HomePage/renderHomePage.js";

// W funkcji:
// 1. Stwórz element <form> i nadaj mu id 'login-form'
// 2. Stwórz element <input>, nadaj mu type 'email', id 'input-email', placeholder 'email'
// 3. Stwórz element <input>, nadaj mu type 'password', id 'input-password', placeholder 'password'
// 4. Stwórz element <button>, nadaj mu type 'submit', textContent 'Sign in'
// 5. Podepnij oba inputy i button do form.
// 6. Na form nakładacie event listener (na submit).
// W środku event listenera:
// 7. Ściągnij wartości inputów email i password, zapisz do zmiennych (.value)
// 8. Wywołanie funkcji signInWithEmailAndPassword, funkcja przyjmuje 3 argumenty:
// - obiekt auth (zaimportuj z firebaseConfig.js)
// - email (który przed chwilą ściągnąłeś z inputa)
// - password (też z inputa)
// 9. Do wywołania poprzedniej funkcji dopisz thena, będzie on przyjmował parametr creds, w środku thena console.log(creds), console.log('Zalogowano') i wywołanie renderHomePage() (wcześniej trzeba zaimportować), dodaj metode catch i console.log('Error')
// KONIEC EL
// 10. Zwróć element form z głównej funkcji przy pomocy return

//https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0

export default function (){
  
  const form = document.createElement('form');
  form.setAttribute = ('id','login-form');
  
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute ('type', 'email');
  inputEmail.setAttribute ('placeholder', 'email');
  inputEmail.setAttribute ('id', 'input-email');
  
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute ('type', 'password');
  inputPassword.setAttribute ('placeholder', 'password');
  inputPassword.setAttribute ('id', 'input-password');
  
  const submitButton = document.createElement('button');
  submitButton.setAttribute ('type', 'submit');
  submitButton.setAttribute ('id','login-submit-button' )
  submitButton.innerHTML = 'Sign in';
  
  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(submitButton);
  
form.addEventListener('submit',(event) => {
  event.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;
  //console.log(email, password)

signInWithEmailAndPassword (auth, email, password).then((userCredentials) => {
  console.log(userCredentials)
  console.log ("Zalogowano");
  renderHomePage()
})
.catch((error) => {
   console.log('Error')
});
});
return form
};