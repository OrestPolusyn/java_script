// "use strict";

const urlDB = "https://test-users-api.herokuapp.com/users/";


const getAllUsers = () => {
  return fetch(urlDB)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error:' + response.statusText);
    })
    .then(data => data.data)
    .catch(error => console.log(error));
}

// getAllUsers();

const getUserById = id => {
  return fetch(`${urlDB}${id}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error:' + response.statusText);
    })
    .then(dataDB => { return dataDB })
    .catch(error => console.log(error));
}

// getUserById("5d00fce1c13d930014b9d753").then(dataB =>
//   console.log(dataB.data.id));

const addUser = (name, age) => {
  const newPost = {
    name: name,
    age: age
  };
  return fetch(urlDB, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error:' + response.statusText);
    })
    .then(dataBase => { return dataBase })
    .catch(error => console.log(error));
}

// addUser('Orest', 26).then(dataNew => console.log(dataNew));


const removeUser = (id) => {
  return fetch(`${urlDB}${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error:' + response.statusText);
    })
    .then(() => console.log('Delete'))
    .catch(error => console.log(error));
}

// removeUser('5d06507598c3d2001410d3e8');


const updateUser = (id, user) => {
  return fetch(`${urlDB}${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Error:' + response.statusText);
    })
    .then(dataBase => dataBase)
    .catch(error => console.log(error));
}

// updateUser('5d06506a98c3d2001410d3e7', { name: 'Pasha', age: '30'})
// .then(updateDB => updateDB);


let form = document.querySelector('.js-form'),
  userAll = document.querySelector('.js-list-all'),
  userId = document.querySelector("input[name=id]"),
  userName = document.querySelector('input[name=name]'),
  userAge = document.querySelector('input[name=age]'),
  userList = document.querySelector('.js-users');

form.addEventListener("click", getUsersData);

function getUsersData(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "BUTTON") return;

  if (target.dataset.action === "all") {
    getAllUsers().then(data => {
      return (userList.innerHTML = data.reduce(
        (acc, el) => (acc += `<li> ID: ${el.id} Ім'я: ${el.name}, Вік: ${el.age}</li>`),
        ""
      ));
    });
  }

  if (target.dataset.action === "id") {
    if (userId.value) {
      getUserById(userId.value).then(dataB =>
        userList.textContent = `ID: ${dataB.data.id}  Ім'я: ${dataB.data.name}  Вік: ${dataB.data.age}`
      );
    } else { userList.textContent = `Введіть ID` }
  }

  if (target.dataset.action === "create") {
    addUser(userName.value, userAge.value).then(dataB =>
      userList.textContent = `Cтворений новий користувач: Ім'я: ${dataB.data.name}  Вік: ${dataB.data.age}`
    );
  }

  if (target.dataset.action === "delete") {
    removeUser(userId.value).then(() =>
      userList.textContent = 'Користувач видалений');
  }

  if (target.dataset.action === "update") {
    const userPUT = {
      name: userName.value,
      age: userAge.value
    }
    updateUser(userId.value, userPUT).then(dataB =>
      userList.textContent = `Користувача змінено на: Ім'я: ${dataB.data.name}  Вік: ${dataB.data.age}`
    );
  }

  userId.value = null;
  userName.value = null;
  userAge.value = null;

}