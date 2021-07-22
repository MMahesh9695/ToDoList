var btnAdd = document.querySelector('#btn-add');

var themeColor_0 = document.querySelector('.theme-0');
var themeColor_1 = document.querySelector('.theme-1');
var themeColor_2 = document.querySelector('.theme-2');
var themeColor_3 = document.querySelector('.theme-3');
var themeColor_4 = document.querySelector('.theme-4');

var selectedTheme = "theme-0";

btnAdd.addEventListener('click', btnAddClick);
themeColor_0.addEventListener('click', () =>changeTheme('theme-0'));
themeColor_1.addEventListener('click', () =>changeTheme('theme-1'));
themeColor_2.addEventListener('click', () =>changeTheme('theme-2'));
themeColor_3.addEventListener('click', () =>changeTheme('theme-3'));
themeColor_4.addEventListener('click', () =>changeTheme('theme-4'));


function changeTheme(themeClass){
    selectedTheme = themeClass;
    document.querySelector('#txt-details').className = themeClass;
}

function btnAddClick(){
    var enteredText = document.querySelector('#txt-details').value;
    
    if(enteredText == ""){
        alert('Please enter a value');
        return false;
    }

    var newList = document.createElement('li');
    var txtNode = document.createTextNode(enteredText);
    newList.appendChild(txtNode);
    newList.classList.add('todolist-items', selectedTheme);
    document.querySelector('#todo-items').appendChild(newList);
    document.querySelector('#txt-details').value = "";
    selectedTheme = "theme-0"
    document.querySelector('#txt-details').className = selectedTheme;
}