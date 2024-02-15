const inputBox = document.getElementById("input-box"); // Get the input box element by its ID
const listContainer = document.getElementById("list-container"); // Get the list container element by its ID

function addTask() {
    if(inputBox.value === ''){ // Check if the input box value is empty
        alert("You must write something!"); // Display an alert if it's empty
    } else {
        let li = document.createElement("li"); // Create a new list item element
        li.innerHTML = inputBox.value; // Set the inner HTML of the list item to the input box value
        listContainer.appendChild(li); // Append the list item to the list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = ""; // Clear the value of the input box
    saveData() 
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();