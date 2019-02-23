'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const cancel = 'Отменено пользователем!';
const notAdmin = 'Доступ запрещен, неверный логин!';
const notPassword = 'Доступ запрещен, неверный пароль!';
const logIn = 'Добро пожаловать!';

const Login = prompt('Введіть логін');

if (Login === null) {
    alert(cancel);
    } else if (Login !== adminLogin) {
        alert(notAdmin);
}

else {
const Password = prompt('Введите пароль');

    if (Password === null) {
        alert(cancel);
    } else if (Password!==adminPassword) {
        alert(notPassword);
        } else {
            alert(logIn);
    }
}
