var btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', btnAddClick);

var defaultTheme = "theme-0";
let txtDetails = document.querySelector('#txt-details');
var counter =1;
//// Without Event delegation
// var themeColor_0 = document.querySelector('.theme-0');
// var themeColor_1 = document.querySelector('.theme-1');
// var themeColor_2 = document.querySelector('.theme-2');
// var themeColor_3 = document.querySelector('.theme-3');
// var themeColor_4 = document.querySelector('.theme-4');

// themeColor_0.addEventListener('click', () =>changeTheme('theme-0'));
// themeColor_1.addEventListener('click', () =>changeTheme('theme-1'));
// themeColor_2.addEventListener('click', () =>changeTheme('theme-2'));
// themeColor_3.addEventListener('click', () =>changeTheme('theme-3'));
// themeColor_4.addEventListener('click', () =>changeTheme('theme-4'));

//Event Delegation
const themeList = document.querySelector('.ul_themelist');
themeList.addEventListener('click',(e)=>{
    if(e.target.tagName == "DIV"){
        changeTheme(e.target.classList[1]);
    }
});

function changeTheme(themeClass){
    defaultTheme = themeClass;
    txtDetails.classList.remove(...txtDetails.classList);
    txtDetails.classList.add(themeClass,"text-box");
}

function btnAddClick(){
    var enteredText = document.querySelector('#txt-details').value;
    
    if(enteredText == ""){
        alert('Please enter a value');
        return false;
    }

    let todolistDiv = document.createElement('div');
    todolistDiv.classList.add("todolist-items",defaultTheme);
    todolistDiv.setAttribute('draggable',true);
    todolistDiv.setAttribute('id','listItems'+ ++counter);
    todolistDiv.append(enteredText);
    todolistDiv.addEventListener('dragstart',dragStartList);

    document.querySelector('#toDoItem').appendChild(todolistDiv);
    document.querySelector('#txt-details').value = "";
    txtDetails.classList.remove(...txtDetails.classList);
    defaultTheme = "theme-0";
    document.querySelector('#txt-details').classList.add(defaultTheme,"text-box");
}


const completedList = document.querySelector('#completedList');

completedList.addEventListener('dragover',dragOverList);
completedList.addEventListener('drop',dragDropList);

function dragStartList(e){
    e.dataTransfer.setData("text", e.target.id);
}

function dragOverList(e){
    e.preventDefault();
    console.log('c');
}

function dragDropList(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    console.log(data);
    e.target.appendChild(document.getElementById(data));
}