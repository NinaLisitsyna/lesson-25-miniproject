/* На странице в левой части постоянный список пользователей.
В правой части отображены ссылки-табуляторы "Полная информация", "Задачи", "Посты", "Фотоальбомы"
При клике на ссылку-табулятор соответствующая информация отображается на экране, а все остальные не видны
При смене пользователя, с песочницы получаем всю его необходимую информацию, а вкладка "Информация" автоматически активируется */

const userList = document.querySelector('#userList');
const navTabs = document.querySelector('#navTabs');
const infoBox = document.querySelector('#infoBox');

let users = [];
let todoList = [];
let posts = [];
let photoAlbums = [];

const URL = 'https://jsonplaceholder.typicode.com';



const fetchUsers = async () =>{
    try{
        const response = await fetch (`${URL}/users`);
        const data = await response.json();
        users = data;
    }catch (e){
        console.log(e)
    }
    renderUsers();
}

const renderUsers = () =>{
    users.forEach( user =>{
        const userEle = document.createElement('div');
        userEle.className = 'left-item';
        userEle.textContent = user.name;
        userEle.addEventListener('click', ()=>{
            clickUserHandler(user);
        })
        userList.append(userEle)
        })
}

const clickUserHandler = (user)=>{
    
}

const fetchTodoByUserId = async (userId) =>{
    try{
        const response = await fetch (`${URL}/todos?userId=${userId}`);
        todoList = await response.json();
    }catch(e){
        console.log(e)
    }
}

const fetchPosts = async (userId) =>{
    try{
        const response = await fetch (`${URL}/posts?userId=${userId}`);
        posts = await response.json();
    }catch(e){
        console.log(e)
    }
}

const fetchAlbums = async (userId) =>{
    try{
        const response = await fetch (`${URL}/albums?userId=${userId}`);
        photoAlbums = await response.json();
    }catch(e){
        console.log(e)
    }
}


const renderFullInfo = (person) =>{
    const userInfo = document.createElement('div');
    infoBox.append(userInfo);
    userInfo.innerHTML = `
    <h2>${person.name}</h2>
    <p>${person.username}</p>
    <p>${person.email}</p>
    <p>${person.adress.street}, ${person.adress.suite}, ${person.adress.city}, ${person.adress.zipcode}</p>
    `;
}
const main = () =>{
    fetchUsers();
}

main();