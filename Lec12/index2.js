//1. Create a new element using createElement function 
//2. insert require data either by using .innerText or innerHtml
//3. insert new element in parent container using appendChild or append


let todo={
    id: 1,
    title: "study at 9pm"
}
let todoContainer = document.querySelector(".todoContainer");
function addTodo(todo){
    let li = document.createElement("li");
    li.innerHTML = `<div>
                <input type="checkbox" name="" id="">
                <h1>${todo.title}</h1>
            <div>
            <button>❌</button>
            <button>✏️</button>
            </div>
            </div>`;
    todoContainer.appendChild(li);        
}
addTodo(todo);