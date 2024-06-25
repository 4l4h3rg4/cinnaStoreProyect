/* constantes del register */
const register = document.getElementById('registro')
const userRegister = document.getElementById('txt-register')
const emailRegister = document.getElementById('email-register')
const passwordRegister = document.getElementById('password-register')
const terminos = document.getElementById('checkbox-terminosycondiciones')
const emailBoxRegister = document.getElementById('email-box-register')
const passwordBoxRegister = document.getElementById('password-box-register')
const warningUserRegister = document.getElementById('warning-user-register')
const warningEmailRegister = document.getElementById('warning-correo-register')
const warningPasswordRegister = document.getElementById('warning-password-register')

/* constantes del login */
const login = document.getElementById('inicio-sesion')
const emailLogin = document.getElementById('email-login')
const passwordLogin = document.getElementById('password-login')
const recordar = document.getElementById('recordar')
const warningEmailLogin = document.getElementById('warning-correo-login')
const warningPasswordLogin = document.getElementById('warning-password-login')
const emailBoxLogin = document.getElementById('email-box-login')
const passwordBoxLogin = document.getElementById('password-box-login')

/* validaciones login */
login.addEventListener('submit', e => {
    console.log('login submit')
    if (emailLogin.value.trim() === '' || passwordLogin.value.trim() === '') {
        warningEmailLogin.textContent = 'Por favor, rellene todos los campos';
        warningPasswordLogin.textContent = 'Por favor, rellene todos los campos';
    } else {
        warningEmailLogin.textContent = '';
        warningPasswordLogin.textContent = '';
        // registrar usuario
        console.log('Usuario registrado');
    }

    /* cuando aparezca un mensaje de error, el css de lo que este abajo de dicho mensaje cambiara */
   if (warningEmailLogin.textContent !== '') {
        passwordBoxLogin.style.marginTop = '20px';
   } else {
        passwordBoxLogin.style.marginTop = '0px';
   }
   if (warningPasswordLogin.textContent !== '') {
        recordar.style.marginTop = '40px';
   } else {
        recordar.style.marginTop = '0px';
   }

   setTimeout(() => {
    warningEmailLogin.textContent = '';
    warningPasswordLogin.textContent = '';
    recordar.style.marginTop = '0px';
    emailBoxLogin.style.marginTop = '0px'
    passwordBoxLogin.style.marginTop = '0px';
    }, 3000);
})

/* validaciones de register */
register.addEventListener('submit', e => {
    console.log('register submit')
    if (userRegister.value.trim() === '' || emailRegister.value.trim() === '' || passwordRegister.value.trim() === '') {
        warningUserRegister.textContent = 'Por favor, rellene todos los campos';
        warningEmailRegister.textContent = 'Por favor, rellene todos los campos';
        warningPasswordRegister.textContent = 'Por favor, rellene todos los campos';
    } else if (userRegister.value.length < 6) {
        warningUserRegister.textContent = 'El nombre de usuario debe tener al menos 6 caracteres';
    } else if (emailRegister.value.indexOf('@') === -1 || emailRegister.value.indexOf('.') === -1 || emailRegister.value.split('.')[1].trim() === '') {
        warningEmailRegister.textContent = 'Correo electrónico no válido';
    } else if (passwordRegister.value.length < 8) {
        warningPasswordRegister.textContent = 'La contraseña debe tener al menos 8 caracteres';
    } else {
        warningUserRegister.textContent = '';
        warningEmailRegister.textContent = '';
        warningPasswordRegister.textContent = '';
        // registrar usuario
        console.log('Usuario registrado');
    }

    /* cuando aparezca un mensaje de error, el css de lo que este abajo de dicho mensaje cambiara */
    if (warningUserRegister.textContent !== '') {
         emailBoxRegister.style.marginTop = '40px'
    } else {
         emailBoxRegister.style.marginTop = '0px'
    }
    if (warningEmailRegister.textContent !== '') {
         passwordBoxRegister.style.marginTop = '20px';
    } else {
         passwordBoxRegister.style.marginTop = '0px';
    }
    if (warningPasswordRegister.textContent !== '') {
         terminos.style.marginTop = '40px';
    } else {
         terminos.style.marginTop = '0px';
    }
      
    /* elimina los mensajes de error y vuelve al estado original los css luego de 3 segundos */
    setTimeout(() => {
        warningUserRegister.textContent = '';
        warningEmailRegister.textContent = '';
        warningPasswordRegister.textContent = '';
        terminos.style.marginTop = '0px';
        emailBoxRegister.style.marginTop = '0px'
        passwordBoxRegister.style.marginTop = '0px';
        }, 3000);
});
