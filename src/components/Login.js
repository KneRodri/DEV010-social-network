import { login } from '../lib/FireBase';

const showAlert = (message) => {
  if (typeof window !== 'undefined' && window.alert) {
    window.alert(message);
  } else {
    console.error(message);
  }
};

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  const welcomeTS = document.createElement('span');
  const loginForm = document.createElement('form');
  const imgHome = document.createElement('img');
  const buttonHome = document.createElement('button');
  const iconHome = document.createElement('i');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const btnLogin = document.createElement('button');

  welcomeTS.id = 'titleLogin';
  welcomeTS.classList.add('bienvenida');
  HomeDiv.appendChild(welcomeTS);

  document.body.classList.add('login-body');

  buttonHome.id = 'buttonHome';
  buttonHome.classList.add('btnHome');
  iconHome.className = 'fas fa-arrow-left';
  buttonHome.appendChild(iconHome);
  buttonHome.appendChild(document.createTextNode('Return'));
  document.body.appendChild(buttonHome);
  imgHome.appendChild(buttonHome);
  HomeDiv.appendChild(buttonHome);

  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  loginForm.id = 'loginForm';
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Email';
  inputEmail.id = 'inputEmail';
  inputEmail.classList.add('inputLogin', 'inputEm');
  HomeDiv.appendChild(inputEmail);

  inputPassword.type = 'password';
  inputPassword.placeholder = 'Password';
  inputPassword.id = 'inputPassword';
  inputPassword.classList.add('inputLogin', 'inputPw');
  HomeDiv.appendChild(inputPassword);

  btnLogin.textContent = 'Log In';
  btnLogin.id = 'buttonLogIn';
  btnLogin.classList.add('btnEnterTS');
  HomeDiv.appendChild(btnLogin);

  loginForm.appendChild(inputEmail);
  loginForm.appendChild(inputPassword);
  loginForm.appendChild(btnLogin);
  HomeDiv.appendChild(loginForm);

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();

    const email = inputEmail.value;
    const password = inputPassword.value;

    login(email, password)
      .then(() => {
        onNavigate('/feed');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showAlert('Verificar datos');
        console.error('error al iniciar sesión', errorCode, errorMessage);
      });
  });

  return HomeDiv;
};
